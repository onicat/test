const getConfigData = require('./scripts/getConfigData');
const gulp = require('gulp');
const fs = require('fs');

const buildPath = './src'

async function build() {
  const configData = getConfigData();

  for (let fileOptions of configData.files) {
    const file = fileOptions.file;
    const dirPath = file.slice(0, file.lastIndexOf('/'));

    if (!fs.existsSync(dirPath)){
      fs.mkdir(dirPath, {recursive: true}, (err) => {
        if (err) throw err;
      });
    }

    fs.appendFile(file, fileOptions.content, (err) => {
      if (err) throw err;
    });
  }
}

async function clear() {
  fs.rmdir(buildPath, {recursive: true}, (err) => {
    if (err) {
      throw err
    } else {
      fs.mkdir(buildPath, (err) => {
        if (err) throw err;
      });
    };
  });
}

async function bundle() {
  console.log('clear');
}

const run = gulp.series(clear, build, bundle);

module.exports = {
  build,
  clear,
  bundle,
  run
};