const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const answer = [n];

for (let i = n - 1; i >= 1; i--) {
  answer.unshift(i);

  for (let j = 0; j < i; j++) {
    answer.unshift(answer.pop());
  }
}

console.log(answer.join(" "));
