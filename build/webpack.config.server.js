const path = require('path')

module.exports = {
  target: 'node',
  entry: {//入口文件
    app: path.resolve(__dirname, '../client/server-entry.js')
  },
  output: {
    path: path.resolve(__dirname, "../dist"),//打包后的文件存放的地方
    filename: "server-entry.js",
    publicPath: '/public',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: path.resolve(__dirname, "node_modules")
      },
    ]
  }

}
