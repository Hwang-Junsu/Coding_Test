const [input1, ...input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input1;
const arr = input2.map((el) =>
  el
    .trim()
    .split(" ")
    .map((el) => +el)
);
arr.unshift([0, 0]);
arr.push([0, 0]);
const answer = [];
const graph = [[]];

for (let i = 1; i <= n; i++) {
  let temp = [];
  for (let j = i + arr[i][0]; j <= n + 1; j++) {
    temp.push(j);
  }
  graph.push(temp);
}

graph.push([]);

const dfs = (v, pay) => {
  if (graph[v].length === 0) {
    answer.push(pay);
    return;
  }

  for (let i = 0; i < graph[v].length; i++) {
    dfs(graph[v][i], pay + arr[v][1]);
  }
};

for (let i = 1; i <= n; i++) {
  dfs(i, 0);
}

console.log(Math.max(...answer));
