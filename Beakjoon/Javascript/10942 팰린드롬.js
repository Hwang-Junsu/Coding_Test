const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const m = +input[2];
const questions = input.slice(3).map((el) => el.split(" ").map(Number));

const dp = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}

for (let i = 0; i < n - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    dp[i][i + 1] = true;
  }
}

for (let len = 3; len <= n; len++) {
  for (let start = 0; start < n - len + 1; start++) {
    let end = start + len - 1;

    if (arr[start] === arr[end] && dp[start + 1][end - 1]) {
      dp[start][end] = true;
    }
  }
}
let answer = [];
questions.forEach(([s, e]) => {
  answer.push(dp[s - 1][e - 1] ? 1 : 0);
});

console.log(answer.join("\n"));
