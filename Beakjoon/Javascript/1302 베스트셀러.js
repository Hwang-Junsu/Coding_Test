const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input;
const dict = {};
arr.sort();
let maxKey = "";
let max = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] in dict) dict[arr[i]]++;
  else dict[arr[i]] = 1;

  if (max < dict[arr[i]]) {
    max = dict[arr[i]];
    maxKey = arr[i];
  }
}
console.log(maxKey);
