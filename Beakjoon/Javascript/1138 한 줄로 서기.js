const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
let answer = [];

for (let i = n - 1; i >= 0; i--) {
  const number = i + 1;

  if (answer.length === 0) answer.push(number);
  else {
    const order = arr[i];
    answer = [
      ...answer.slice(0, order),
      number,
      ...answer.slice(order, answer.length),
    ];
  }
}

console.log(answer.join(" "));
