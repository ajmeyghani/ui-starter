const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const root = path.join(__dirname, "/../");

module.exports = {
  mode: "development",
  stats: "errors-only",
  devtool: "source-map",
  entry: {
    index: path.resolve(root, "src/index/index.js"),
  },
  output: {
    path: path.resolve(root, "dist/public"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: [
      path.resolve(root, "src"),
      path.resolve(root, "node_modules"),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, "src/index/index.html"),
    }),
    new CopyPlugin([
      {
        from: path.resolve(root, "src/index/favicon.png"),
        to: path.resolve(root, "dist/public/"),
      },
    ]),
    // new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
  },
};
