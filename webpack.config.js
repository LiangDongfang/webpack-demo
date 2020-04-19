const path = require('path')

module.exports = {
  /*发布模式
   mode（切换模式）:'production' */
  /*开发模式*/
  mode: 'development',
  /*入口配置，默认路径*/
  entry: './src/index.js',/*默认路径*/
  /*出口配置，默认路径*/
  output: {
    path: path.resolve(__dirname, 'dist'),/*默认路径*/
    filename: '[name].[contenthash].js'
  }
}