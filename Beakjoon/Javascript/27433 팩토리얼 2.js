const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

let answer = 1;
for (let i = 1; i <= n; i++) {
  answer *= i;
}

console.log(answer);
