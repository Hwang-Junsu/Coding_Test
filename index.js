var fs = require("fs");

var input = fs.readFileSync("input.txt").toString(); // 풀기용
// const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let arr = input.split("\r\n");
console.log(arr);
