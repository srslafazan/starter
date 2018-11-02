const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
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
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: "[name].[id].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /-test\.(js|jsx)/],
        query: {
          presets: ['@babel/preset-env']
        },
      },
      {
        test: /\.(css|scss|less|sass)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, './src/constructors/sw/sw.js'),
    }),
    new webpack.DefinePlugin({
      'process.env.SERVICE_WORKER_APPLICATION_SERVER_KEY': JSON.stringify(process.env.SERVICE_WORKER_APPLICATION_SERVER_KEY || 'BHEa09WcrSPva3MOvSIXlsGRqEVlfjOvVrT-S5_T__9U9uImayVsaa7xfT8d0Cx_5A3hBIV5lB7fiCsMWdbS5mE'),
      'process.env.SOCKET_ADDRESS': JSON.stringify(process.env.SOCKET_ADDRESS || '/'),
      'process.env.WEB3_PROVIDER': JSON.stringify(process.env.WEB3_PROVIDER || 'http://localhost:8545'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'].concat(
      [".webpack.js", ".web.js", ".mjs"] /* Fix for graqphql packages used by apollo-boost */
    ),
    alias: {
      '@': path.resolve('src'),
      '~': path.resolve(__dirname, '../'),
    },
  },
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
  devtool: '#eval-source-map',
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
