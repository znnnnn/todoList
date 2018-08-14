const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.styl/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'resources/[path][name]-[md5:contenthash:hex:8].[ext]'
        }
      }]
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ],
  mode: process.env.NODE_ENV || 'production'
}

module.exports = config
