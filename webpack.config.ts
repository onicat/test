import * as files from './files.json';
import path from 'path';
import findEntry from './scripts/findEntry';

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