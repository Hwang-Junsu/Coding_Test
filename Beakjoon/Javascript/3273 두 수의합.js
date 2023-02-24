const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map((el) => +el);
const x = +input[2];
let answer = 0;

arr.sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === x) answer++;

  if (sum <= x) left++;
  else right--;
}

console.log(answer);
