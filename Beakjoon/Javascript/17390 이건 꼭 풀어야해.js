const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, q] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const a = [
  0,
  ...input
    .shift()
    .split(" ")
    .map((el) => +el),
];
const arr = input.map((el) => el.split(" ").map((el) => +el));
const answer = [];
a.sort((a, b) => a - b);
for (let i = 1; i <= n; i++) {
  a[i] = a[i - 1] + a[i];
}

arr.forEach((el) => {
  const [start, end] = el;
  answer.push(a[end] - a[start - 1]);
});

console.log(answer.join("\n"));
