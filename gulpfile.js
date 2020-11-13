const getConfigData = require('./scripts/getConfigData');
const gulp = require('gulp');
const shell = require('gulp-shell');
const fs = require('fs');

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
  console.log('clear');
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