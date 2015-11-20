var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "client"),
  entry: './app.js',
  output: {
    path: path.join(__dirname, "wwwroot"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      JQuery: 'jquery'
    })
  ],
  externals: [
    {
      "jquery": "jQuery",
      "bootstrap": "bootstrap"
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:  /(node_modules|bower_components|server|typings)/,
        loader: 'babel'
      }
    ]
  }
};