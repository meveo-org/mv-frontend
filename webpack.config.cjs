const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      }
    ],
  },
    entry: './demo.js',
    mode: "development",
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: 'index.js',
      sourceMapFilename: "[name].js.map",
    },
    devtool: "source-map",
    stats:"verbose",
    devServer: {
      open: ['./docs/index.html'],
      static: {
        directory: path.join(__dirname, ''),
      },
      compress: true,
      port: 9000,
      hot: false,
      liveReload: true,
      client: {
        overlay: false
      }
     
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./index.html"
    })]
  };




