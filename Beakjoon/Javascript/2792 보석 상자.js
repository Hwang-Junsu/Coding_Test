const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const arr = input.map((el) => +el);
arr.sort((a, b) => a - b);

let left = 0;
let right = arr[m - 1];
let mid = Math.floor((left + right) / 2);

while (left < right) {
  let count = 0;
  for (let i = 0; i < m; i++) {
    if (arr[i] % mid === 0) count += Math.floor(arr[i] / mid);
    else count += Math.floor(arr[i] / mid) + 1;
  }
  if (count > n) {
    left = mid + 1;
  } else {
    right = mid;
  }
  mid = Math.floor((left + right) / 2);
}

console.log(mid);
