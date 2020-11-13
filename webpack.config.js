const files = require('./files.json');
const path = require('path');
const findEntry = require('./scripts/findEntry');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: findEntry(files),
  output: {
    filename: files.bundleName,
    path: path.resolve(__dirname, files.destination),
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
}