const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [n, m] = input.split(" ").map((el) => +el);
const answer = [];
const dfs = (v, arr) => {
  if (arr.length === m) {
    answer.push(arr);
    return;
  }

  for (let i = v; i <= n; i++) {
    dfs(v, [...arr, i]);
  }
};

dfs(1, []);

console.log(answer.map((el) => el.join(" ")).join("\n"));
