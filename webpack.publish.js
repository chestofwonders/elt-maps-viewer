const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    library: 'MapsViewer',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
});
