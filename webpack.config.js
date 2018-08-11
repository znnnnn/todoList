const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    },
    {
      test: '/\.styl/',
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]'
        }
      }]
    }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ],
  mode: 'development'
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    // 很重要
    useLocalIp: true,
    host: '0.0.0.0',
    port: '9797',
    overlay: {
      errors: true
    },
    // 自动打开浏览器
    open: true,
    // 热更新
    hot: true
    // historyFallback: {}
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config
