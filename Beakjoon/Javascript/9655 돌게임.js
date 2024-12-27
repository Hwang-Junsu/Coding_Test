const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

// index는 돌의 갯수
// 요소값은 게임의 횟수
const dp = Array.from({ length: 1000 }, () => 0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = Math.min(dp[i - 1] + 1, dp[i - 3] + 1);
}

console.log(dp[n] % 2 === 0 ? "CY" : "SK");
