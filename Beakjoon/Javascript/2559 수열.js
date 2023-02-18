const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map((el) => +el);
const arr = input[1].split(" ").map((el) => +el);

let sum = 0;
for (let i = 0; i < k; i++) {
  sum += arr[i];
}
let max = sum;

for (let i = k; i < n; i++) {
  sum = sum - arr[i - k] + arr[i];
  max = Math.max(max, sum);
}

console.log(max);
