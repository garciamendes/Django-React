const BundleTracker = require('webpack-bundle-tracker')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common.js')
const host = 'localhost'


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    host: host
  },
  plugins: [
    new BundleTracker({
      filename: './config/webpack-stats.json'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist'),
    publicPath: `http://${host}:3000/static/`
  }
})