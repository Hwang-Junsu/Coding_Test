const arr = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => +el.trim());

const n = arr.shift();
console.log(n, arr);
const buffer = [];
