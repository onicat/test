import * as files from './files.json';
import gulp from 'gulp';
import fs from 'fs'; 
import { exec } from 'child_process'

const buildPath = './src';

gulp.task('build', async () => {
  for (let fileOptions of files.files) {
    const file = fileOptions.file;
    const dirPath = file.slice(0, file.lastIndexOf('/'));

    if (!fs.existsSync(dirPath)){
      await fs.promises.mkdir(dirPath, {recursive: true});
    }

    if (fs.existsSync(file)){
      await fs.promises.rm(file);
    }

    await fs.promises.appendFile(file, fileOptions.content);

  }
});

gulp.task('clear', async () => {
  if (fs.existsSync(buildPath)){
    await fs.promises.rmdir(buildPath, {recursive: true});
  }
  
  await fs.promises.mkdir(buildPath);
});

gulp.task('bundle', async () => {
  return exec('.\\node_modules\\.bin\\webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('run', gulp.series('clear', 'build', 'bundle'));