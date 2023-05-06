const path = require('path');
const {readdir} = require('fs/promises');
const {stat, Dirent} = require('fs');

const link = path.join('03-files-in-folder', 'secret-folder');

const files = readdir(link, 'utf-8');

files.then(data => data.forEach(el => {
  const pathToFile = path.join(link, el);
  const dirent = new Dirent(el);

  stat(pathToFile, (_, stats) => {
    if (!stats.isDirectory()) {
      const [name, type] = dirent.name.split('.');
      console.log(`${name} - ${type} - ${(stats.size/1024).toFixed(3)}kb`);
    }
  })
}));