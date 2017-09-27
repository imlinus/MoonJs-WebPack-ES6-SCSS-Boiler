const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './client/app/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'public/bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?-minimize', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
         // remove warnings
        warnings: false,

         // Drop console statements
        drop_console: true
      },
      comments: false
    }),
    new CopyWebpackPlugin([
      { from: './client/public', to: 'public' }
    ]),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
}
