const path = require('path');

module.exports = {
    entry: './demo.js',
    mode: "development",
    output: {
      path: path.resolve(__dirname, 'docs'),
      publicPath: 'docs',
      filename: 'index.js',
    },
    stats:{
      errorDetails: true
    },
    devServer: {
      open: ['/index.html'],
      static: {
        directory: path.join(__dirname, ''),
      },
      compress: true,
      port: 9000,
     
    }
  };