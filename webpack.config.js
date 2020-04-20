const base = require('./webpack.config.base')

module.exports = {
  mode: 'development',
  ...base,
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ]
  }
}




