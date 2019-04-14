const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const root = path.join(__dirname, "/../");

module.exports = {
  performance: {
    hints: false,
  },
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
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM',
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(root, "src/index/favicon.png"),
        to: path.resolve(root, "dist/public/"),
      },
    ]),
  ],
};