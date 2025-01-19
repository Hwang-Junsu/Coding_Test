const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input.slice(1).map(Number);

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = arr[0];
dp[2] = arr[0] + arr[1];
dp[3] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    arr[i - 1] + arr[i - 2] + dp[i - 3],
    arr[i - 1] + dp[i - 2],
    dp[i - 1]
  );
}

console.log(dp[n]);
