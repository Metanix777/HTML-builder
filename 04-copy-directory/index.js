const path = require('path');
const { copyFile, mkdir, readdir } = require('fs/promises');

const link = path.join('04-copy-directory');
const files = readdir(path.join(link, 'files'), {withFileTypes: true, encoding: 'utf-8'});

mkdir(path.join(link, 'files-copy'), {recursive: true});

files.then(data => {
  data.forEach(el => {
    copyFile(path.join(link, 'files', el.name), path.join(link, 'files-copy', el.name))
  });
})