const [input1, input2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, m] = input1.split(" ").map((el) => +el);
const values = input2.split(" ").map((el) => +el);
values.sort((a, b) => a - b);

const count = {};
const countInit = () => {
  for (let i = 0; i < n; i++) {
    count[values[i]] = 0;
  }
  for (let i = 0; i < n; i++) {
    count[values[i]]++;
  }
};

const answer = [];

const dfs = (v, arr, count) => {
  if (arr.length === m) {
    answer.push(arr);
    return;
  }

  count[values[v]] -= 1;

  for (let i = 0; i < n; i++) {
    if (count[values[i]] > 0) dfs(i, [...arr, values[i]], { ...count });
  }
};

for (let i = 0; i < n; i++) {
  countInit();
  dfs(i, [values[i]], count);
}

const removeDuplication = (arr) => {
  return [...new Set(arr.join("|").split("|"))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
};
const arr = removeDuplication(answer);
console.log(arr.map((el) => [...el].join(" ")).join("\n"));
