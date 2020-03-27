const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app' + '.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    })
  ]
});
