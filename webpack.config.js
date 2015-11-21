var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "client"),
  entry: [ 'webpack/hot/dev-server', './app.js'],
  output: {
    path: path.join(__dirname, "wwwroot"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      JQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:  /(node_modules|bower_components|server|typings)/,
        loader: 'babel'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass", "autoprefixer?{browsers:['last 2 version']}"]
      }
    ]
  }
};