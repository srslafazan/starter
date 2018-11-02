const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common')
const { packages } = require('./src/config')

const GATEWAY_URL = process.env.GATEWAY_URL || 'http://0.0.0.0:8000'

const config = {
  mode: 'development',
  entry: {
    index: [
      'webpack-dev-server/client?http://0.0.0.0:8080/',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './src/index.js'),
    ],
  },
  output: common.output,
  module: {
    rules: common.rules,
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]),
  resolve: common.resolve,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 8080,
    public: 'localhost',
     proxy: {
      '/api': `${GATEWAY_URL}`,
      '/graphql': `${GATEWAY_URL}`,
      '/socket.io': `${GATEWAY_URL}`,
    },
  },
  devtool: 'inline-source-map',
};

if (packages.relay) {
  config.plugins.push(
    new require('relay-compiler-webpack-plugin')({
      schema: path.resolve(__dirname, '../gateway/constructors/express/express-graphql/schema.graphql'), // or schema.json or a GraphQLSchema instance
      src: path.resolve(__dirname, './src'),
    })
  )
}


module.exports = config
