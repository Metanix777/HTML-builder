const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path'); 
const link = path.join('02-write-file', 'text.txt');

let streem = new fs.WriteStream(link);

stdout.write('Привет! Введите текст:\n');
stdin.on('data', data => {
  const d = data.toString().trim();
  if (d === 'exit') process.exit();
  streem.write(d+'\n');
});

process.on('exit', () => stdout.write('Удачи!'));