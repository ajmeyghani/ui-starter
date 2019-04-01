const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

// todo: remove this...
const r = (p) => {
  const root = path.join(__dirname, '/../');
  return path.resolve(root, p);
};

module.exports = {
  mode: "development",
  stats: 'errors-only',
  devtool: "source-map",
  entry: {
    index: r("src/index/index.js")
  },
  output: {
    path: r("dist/public"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  resolve: {
    modules: [r("src"), r("node_modules")],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: r("src/index/index.html"),
    }),
    new CopyPlugin([
      { from: r('src/index/favicon.png'), to: r("dist/public/") },
    ]),
    // new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
  },
};
