const path = require('path');
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "elt-maps-viewer.js",
    path: path.resolve(__dirname, "lib"),
    clean: true,
    library: 'MapsViewer',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
});
