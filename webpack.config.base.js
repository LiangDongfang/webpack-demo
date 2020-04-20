const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /*入口配置，默认路径*/
  entry: './src/index.js',/*默认路径*/
  /*出口配置，默认路径*/
  output: {
    path: path.resolve(__dirname, 'dist'),/*默认路径*/
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LDoFun',
      template: 'src/index.html'
    })
  ],
}




