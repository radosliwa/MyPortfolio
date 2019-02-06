var path = require('path');

module.exports = {
  entry: {
    App: './app/assets/scripts/main.js',
    Vendor: './app/assets/scripts/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './app/temp/scripts')
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};