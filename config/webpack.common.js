const path = require("path");
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
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(root, "src/index/favicon.png"),
        to: path.resolve(root, "dist/public/"),
      },
      {
        from: path.resolve(root, "src/assets/images/"),
        to: path.resolve(root, "dist/public/images"),
      },
      {
        from: path.resolve(root, "src/assets/css/"),
        to: path.resolve(root, "dist/public/css"),
      },
    ]),
  ],
};
