const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

const dp = Array.from({ length: m + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  const coin = arr[i];

  for (let j = coin; j < m + 1; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
}

console.log(dp[m]);
