const path = require('path');
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
});
