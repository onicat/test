const files = require('./files.json');
const gulp = require('gulp');
const fsPromises = require('fs').promises;
const fs = require('fs');
const exec = require('child_process').exec;;

const buildPath = './src';

const build = async () => {
  for (let fileOptions of files.files) {
    const file = fileOptions.file;
    const dirPath = file.slice(0, file.lastIndexOf('/'));

    if (!fs.existsSync(dirPath)){
      await fsPromises.mkdir(dirPath, {recursive: true}, (err) => {
        if (err) throw err;
      });
    }

    await fsPromises.appendFile(file, fileOptions.content, (err) => {
      if (err) throw err;
    });
  }
}

const clear = async () => {
  if (fs.existsSync(buildPath)){
    await fsPromises.rmdir(buildPath, {recursive: true}, (err) => {
      if (err) throw err;
    });
  }
  
  await fsPromises.mkdir(buildPath, (err) => {
    if (err) throw err;
  });
}

const bundle = async () => {
  return exec('.\\node_modules\\.bin\\webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
}

const run = gulp.series(clear, build, bundle);

module.exports = {
  build,
  clear,
  bundle,
  run
};