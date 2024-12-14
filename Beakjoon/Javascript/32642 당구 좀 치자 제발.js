const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const answer = [];
let angry = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === 0) {
    angry -= 1;
  } else {
    angry += 1;
  }
  answer.push(angry);
}

console.log(answer.reduce((prev, current) => prev + current, 0));
