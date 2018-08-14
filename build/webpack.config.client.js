const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

let config

if (isDev) {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  })
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
} else {
  config.entry = {
    app: path.join(__dirname, 'src/main.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.css$/,
    use: ExtractTextWebapckPlugin.extract({
      use: 'css-loader'
    })

  })
  config.plugins.push(
    new ExtractTextWebapckPlugin('styles.[md5:contenthash:hex:20].css')),
  config.optimization = {

    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          name: 'runtime',
          priority: 10,
          enforce: true
        }
      }
    }
  }
}

module.exports = config
