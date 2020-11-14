import * as files from './files.json';
import gulp from 'gulp';
import fs from 'fs'; 
import { exec } from 'child_process'

const buildPath = './src';

const build = async () => {
  for (let fileOptions of files.files) {
    const file = fileOptions.file;
    const dirPath = file.slice(0, file.lastIndexOf('/'));

    if (!fs.existsSync(dirPath)){
      await fs.promises.mkdir(dirPath, {recursive: true});
    }

    await fs.promises.appendFile(file, fileOptions.content);
  }
}

const clear = async () => {
  if (fs.existsSync(buildPath)){
    await fs.promises.rmdir(buildPath, {recursive: true});
  }
  
  await fs.promises.mkdir(buildPath);
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