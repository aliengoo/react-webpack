//https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js

var path = require('path');

var gulp = require('gulp');
var lp = require('gulp-load-plugins')({
  lazy: true
});
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

process.env.UV_THREADPOOL_SIZE=5;

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
  gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("import:scss", function () {
  // pipe the target file to the
  var mainFile = [path.join("./client", "app.scss")];
  var imports = [
    "!" + mainFile[0],
    path.join("!./client", "__app.scss"),
    "./client/**/*.scss"
  ];

  return gulp.src(mainFile)
    .pipe(lp.inject(gulp.src(imports, {read: false}), {
      relative: true,
      starttag: '/* inject:imports */',
      endtag: '/* endinject */',
      transform: function(filePath){
        return '@import "' + filePath + '";';
      }
    }))
    .pipe(lp.rename('__app.scss'))
    .pipe(gulp.dest(path.join(__dirname, 'client')));
});

gulp.task("webpack:build", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) throw new lp.util.PluginError("webpack:build", err);
    lp.util.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new lp.util.PluginError("webpack:build-dev", err);
    lp.util.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', function (done) {

  var config = Object.create(webpackConfig);
  config.devtool = "eval";
  config.debug = true;

  var compiler = webpack(config);

  new WebpackDevServer(compiler, {
    path: path.join(__dirname, "wwwroot"),
    contentBase: path.join(__dirname, "wwwroot"),
    publicPath: '/',
    stats: {
      colors: true
    }
  }).listen(8081, "localhost", function(err){

    if (err) {
      throw new lp.util.PluginError('webpack-dev-server', err);
    }
    lp.util.log('[webpack-dev-server]', 'http://localhost:8081/webpack-dev-server/index.html');
  });
});
