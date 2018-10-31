const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config')


const productionConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: "[id].[hash].js"
  },
  module: {
    /* Rules are the same for development and production */
    rules: config.module.rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      hash: true,
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve('src')
    },
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
  },
  devtool: 'nosources-source-map',
};

module.exports = productionConfig;
