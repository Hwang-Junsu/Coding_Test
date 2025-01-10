const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];

for (let i = 1; i <= t * 3; i += 3) {
  const n = +input[i];
  const coins = input[i + 1].split(" ").map(Number);
  const cost = +input[i + 2];

  const dp = Array.from({ length: cost + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    const coin = coins[i];

    for (let j = coin; j < cost + 1; j++) {
      dp[j] += dp[j - coin];
    }
  }

  console.log(dp[cost]);
}
