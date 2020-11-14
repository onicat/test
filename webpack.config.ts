const files = require('./files.json');
const path = require('path');
const findEntry = require('./scripts/findEntry.ts');

export default {
  mode: "development",
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