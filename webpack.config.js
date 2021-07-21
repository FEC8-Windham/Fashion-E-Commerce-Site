const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:
  {
    rules:
      [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      ]
  }
};
