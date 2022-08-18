var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().trim().split("\n"); // 풀기용

let length = input.length;

let trees = {};

input.map((tree) => {
  if (!tree in trees) console.log(tree);
});

console.log(trees);
