const arr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el.trim());

const n = arr.shift();
arr.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  answer += Math.abs(i + 1 - arr[i]);
}

console.log(answer);
