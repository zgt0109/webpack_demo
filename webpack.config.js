const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
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
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.(csv|tsv)$/,
            use: ['csv-loader']
        },
        {
            test: /\.xml$/,
            use: ['xml-loader']
        }
      ]
  }
};