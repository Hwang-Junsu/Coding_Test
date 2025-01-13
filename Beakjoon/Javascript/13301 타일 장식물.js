const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 4n;
dp[2] = 6n;

for (let i = 3; i < n + 1; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[n].toString());
