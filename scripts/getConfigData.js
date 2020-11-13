const fs = require('fs');

module.exports = function(path) {
  return require((path) ? '../' + path : '../configData.json')
};