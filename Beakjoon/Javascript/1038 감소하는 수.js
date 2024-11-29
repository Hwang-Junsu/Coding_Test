const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let answer = -1;
let count = 0;

function solution(value, size) {
  if (size === 0) {
    if (n === count) answer = value;
    count++;
    return;
  }

  let last = value === 0 ? 10 : value % 10;
  for (let i = 0; i < last; i++) {
    const nextValue = value * 10 + i;
    if (value === 0 && i === 0) continue;
    solution(nextValue, size - 1);
  }
}

for (let i = 0; i <= 10; i++) {
  solution(0, i);
}

console.log(answer);
