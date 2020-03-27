const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app' + '.[bundle].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      filename: "index.html",
      template: './src/index.html',
      inject: 'body'
    })
  ],
});
