const fs = require('fs');

const createDirFolder = (path) => {
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

const deleteFileInFolder = (path) => {
  if(fs.existsSync(path)) {
    fs.readdirSync(path).forEach(f => fs.rmSync(`${path}/${f}`));
  }
}

exports.createDirFolder = createDirFolder;
exports.deleteFileInFolder = deleteFileInFolder;
