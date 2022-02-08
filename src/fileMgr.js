const fs = require('fs');

const createDirFolder = (path) => {
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

const deleteFileInFolder = (path, name) => {
  if(fs.existsSync(path)) {
    fs.readdirSync(path).forEach(f => {
      const fileName = f.replace(/\.[^/.]+$/, "")
      if(fileName === name) {
        fs.rmSync(`${path}/${f}`)
      }
    });
  }
}

exports.createDirFolder = createDirFolder;
exports.deleteFileInFolder = deleteFileInFolder;
