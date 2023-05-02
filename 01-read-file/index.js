const fs = require('fs');
const path = require('path'); 

const link = path.join('01-read-file', 'text.txt');

let streem = new fs.ReadStream(link, {encoding: 'utf-8'});

streem.on('readable', () => {
  const data = streem.read();
  if(data != null) console.log(data);
})