const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'react-hot-loader/webpack'
          }, {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }, {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
