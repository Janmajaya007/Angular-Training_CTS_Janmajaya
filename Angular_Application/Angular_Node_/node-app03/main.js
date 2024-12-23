import { strict } from 'assert';
import fs from 'fs';

fs.writeFileSync("abcd.txt","Hello World this is my first line of String writen into test file");

var data = fs.readFileSync("abcd.txt");
var text = String(data);

console.log("The file content: \n" + text);