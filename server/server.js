var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');


app.use(bodyParser.json());
app.use(require('./movies'));

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/movies', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...');
    });
  }
});


