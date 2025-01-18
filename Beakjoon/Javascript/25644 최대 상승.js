const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: n }, () => 0);

let minPrice = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], arr[i] - minPrice);
  minPrice = minPrice > arr[i] ? arr[i] : minPrice;
}

console.log(dp[n - 1]);
