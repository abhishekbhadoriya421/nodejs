const os = require("os")
const path = require('path');
const fs = require('fs')

console.log("Os Plate form", os.cpus().length);
// console.log("Os Home Dir", os.homedir());

// console.log("File Name ", path.basename(__filename));
// console.log("Directory Name ", path.basename(__dirname));

// fs.writeFileSync('test.txt','Hello World');

// const data = fs.readFileSync('test.txt','utf-8');

// console.log(data)

console.log("Total Memory (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / (1024 ** 3)).toFixed(2));

console.log("User Info:", os.userInfo());
