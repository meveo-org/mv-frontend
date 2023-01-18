const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './demo.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'demo-mv-select.js',
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: false
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })],
};