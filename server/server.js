var express = require('express');
var bodyParser = require('body-parser');
var httpProxy = require('http-proxy');
var db = require('./db');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'wwwroot');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(require('./movies'));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./server/bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

}


// Connect to Mongo on start
db.connect('mongodb://localhost:27017/movies', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1)
  } else {
    app.listen(port, function() {
      console.log('Listening on port 3000...');
    });
  }
});


