const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * mode -> sets process.env.NODE_ENV given value
 * devtool -> how source maps are generated
 * entry -> entry file where webpack starts bundling
 * output -> output path for bundled code
 * publicPath -> specify base path for all assets in the app
 * modues -> sets regex rule for file ext to be used in transpilation by babel-loader
 * HotModulereplacement -> enables hot module replacement
 * NoEmmitOnErrors -> allows skipping emmiting when there are compile errors
 */

const config = {
  name: "browser",
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
