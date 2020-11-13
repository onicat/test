module.exports = (files) => {
  for (let fileOprions of files.files) {
    if (fileOprions.entry) {
      const file = fileOprions.file;
      
      if (file.startsWith('.')) {
        return file.slice(1); 
      } else {
        return file;
      }
    }
  }

  throw new Error('Entry point not found');
};