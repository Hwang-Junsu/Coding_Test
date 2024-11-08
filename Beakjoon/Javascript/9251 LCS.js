const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [str1, str2] = input;

const dp = Array.from({ length: str1.length + 1 }, () =>
  Array.from({ length: str2.length + 1 }, () => 0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

dp.forEach((el) => console.log(el.join(" ")));

console.log(dp[str1.length][str2.length]);
