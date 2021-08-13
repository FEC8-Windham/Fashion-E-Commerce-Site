const path = require('path');
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:
  {
    rules:
      [ {
        test: /\.(jpg|png|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/transform-runtime'
          ]
        }
      },
      ]
  }
};
