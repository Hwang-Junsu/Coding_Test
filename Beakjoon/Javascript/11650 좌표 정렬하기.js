const [n, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((el) => el.trim());
const answer = [];

for (let i = 0; i < n; i++) {
  arr[i] = arr[i].split(" ").map((el) => +el);
}
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

arr.forEach((index) => answer.push(index.join(" ")));
console.log(answer.join("\n"));
