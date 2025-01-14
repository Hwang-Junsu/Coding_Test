const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input.slice(1).map(Number);

const dp = Array.from({ length: n + 1 }, () => 0);

dp[0] = arr[0];
let max = 0;

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] * arr[i], arr[i]);
  max = Math.max(dp[i], max);
}

console.log(max.toFixed(3));
