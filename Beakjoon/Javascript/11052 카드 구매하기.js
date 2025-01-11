const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: n + 1 }, () => 0);
arr.forEach((cost, i) => (dp[i + 1] = cost));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
  }
}

console.log(dp[n]);

// 카드를 몇장 구매할지에 대해
// ex) dp[4] => 4장 구매할때의 경우 값
// 3장은 구한것 + 1장 사기 dp[3] + arr[0]
// 2장은 구한것 + 2장 사기 dp[2] + arr[1]
// 1장은 구한것 + 3장 사기 dp[1] + arr[2]
// 0장 + 통으로 사기 arr[3]
