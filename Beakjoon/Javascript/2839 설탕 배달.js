// dp로 해결

const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 1; i < n + 1; i++) {
  if (i >= 3) {
    dp[i] = Math.min(dp[i - 3] + 1, dp[i]);
  }

  if (i >= 5) {
    dp[i] = Math.min(dp[i - 5] + 1, dp[i]);
  }
}

console.log(dp[n] === Infinity ? -1 : dp[n]);
