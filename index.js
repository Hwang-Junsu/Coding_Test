const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const size = +input.shift();
const map = input.map((el) => el.split(" ").map((el) => +el));

const dp = Array.from({length: 3}, () =>
  Array.from({length: size}, () => Array.from({length: size}, () => 0))
);

dp[0][0][1] = 1;
for (let i = 2; i < size; i++) {
  if (map[0][i] === 0) {
    dp[0][0][i] = dp[0][0][i - 1];
  }
}

for (let i = 1; i < size; i++) {
  for (let j = 1; j < size; j++) {
    if (map[i][j] === 0 && map[i][j - 1] === 0 && map[i - 1][j] === 0) {
      dp[1][i][j] =
        dp[0][i - 1][j - 1] + dp[1][i - 1][j - 1] + dp[2][i - 1][j - 1];
    }

    if (map[i][j] === 0) {
      dp[0][i][j] = dp[0][i][j - 1] + dp[1][i][j - 1];
      dp[2][i][j] = dp[2][i - 1][j] + dp[1][i - 1][j];
    }
  }
}

console.log(
  dp[0][size - 1][size - 1] +
    dp[1][size - 1][size - 1] +
    dp[2][size - 1][size - 1]
);
