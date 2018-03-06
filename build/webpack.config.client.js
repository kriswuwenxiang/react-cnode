const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config =  {
  entry: {//入口文件
    app: path.resolve(__dirname, '../client/app.js')
  },
  output: {
    path: path.resolve(__dirname, "../dist"),//打包后的文件存放的地方
    filename: "[name].[hash].js",
    // publicPath: 'http://baidu.com/',//项目发布地址
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: "react-hot-loader/babel"
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules")
      },
    ]
  },

  plugins: [
    new HTMLPlugin({//自动生成HTML文件
      // filename: "index-[hash].html",
      template: path.resolve(__dirname, "../client/template.html")
      // title: "Webpack My Project",
      // chunks: ["main", "print"],
      // inject: "body"
    }),
  ]

}

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {// 404请求都返回index.html
      index: '/public/index.html'
    },
    // proxy: {
    //   '/api': 'http://localhost:3333'
    // }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
