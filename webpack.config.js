const path = require('path');

module.exports = {
  entry: './src/simpleLineChart.js',
  output: {
    filename: 'simpleLineChart.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|anychartBundle)/,
        loader: 'babel-loader',
        query: {
          compact: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devtool: 'source-map'
};
