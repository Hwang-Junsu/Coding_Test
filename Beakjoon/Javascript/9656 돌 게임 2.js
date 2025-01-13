const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < n + 1; i++) {
  dp[i] = Math.min(dp[i - 1] + 1, dp[i - 3] + 1);
}

console.log(dp[n] % 2 === 1 ? "CY" : "SK");
