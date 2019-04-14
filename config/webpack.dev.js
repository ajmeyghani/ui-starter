const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const root = path.join(__dirname, "/../");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(root, "src/index/index.html"),
      hash: true,
    }),
  ]
});
