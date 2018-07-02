const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer:{
    contentBase: './dist',
    host: '0.0.0.0',
    port: '4000'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
      ]
  }
};