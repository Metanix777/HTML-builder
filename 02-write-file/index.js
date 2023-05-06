const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path'); 

const link = path.join('02-write-file', 'text.txt');

let streem = new fs.WriteStream(link);

stdout.write('Hello! Enter the text:\n');
stdin.on('data', data => {
  const d = data.toString().trim();
  if (d === 'exit') process.exit();
  streem.write(d + '\n');
});

process.on('exit', () => stdout.write('Good luck! Hope you come back :)'));

process.on('SIGINT', () => {
  process.exit();
});