const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // multiple entry points
  entry: {
    // key will be file name of output
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // [name] will be replaced by 'bundle', if entry has multiple keys e.g other than 'bundle', entry has other key name 'buff', 'anything'
    // output will be dist/bundle.js, dist/buff.js, dist/anything.js
    filename: "[name].js",
  },
  module: {
    // elements of array is rules for file type
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Learn Webpack 5",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
