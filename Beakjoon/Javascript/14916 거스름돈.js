const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => Infinity);
dp[0] = 0;
const coins = [2, 5];

for (let i = 0; i < coins.length; i++) {
  const coin = coins[i];
  for (let j = coin; j < n + 1; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
}

console.log(dp[n] === Infinity ? -1 : dp[n]);
