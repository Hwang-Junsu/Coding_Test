const [input1, input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, m] = input1.split(" ").map((el) => +el);
const values = [...new Set(input2.split(" ").map((el) => +el))];
values.sort((a, b) => a - b);
const answer = [];

const dfs = (v, arr, prev) => {
  if (values[v] < prev) return;
  if (arr.length === m) {
    answer.push(arr);
    return;
  }

  for (let i = 0; i < values.length; i++) {
    dfs(i, [...arr, values[i]], values[v]);
  }
};

dfs(0, [], 0);

console.log(answer.map((el) => el.join(" ")).join("\n"));
