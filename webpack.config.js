const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"], plugins: ["transform-class-properties"] },
        }],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
