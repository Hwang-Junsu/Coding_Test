const [input1, input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, k] = input1.split(" ").map((el) => +el);
const arr = input2.split(" ").map((el) => +el);

const gap = [];

for (let i = 1; i < arr.length; i++) {
  gap.push(Math.abs(arr[i - 1] - arr[i]));
}

gap.sort((a, b) => a - b);
for (let i = 0; i < k - 1; i++) {
  gap.pop();
}

console.log(gap.reduce((prev, cur) => prev + cur, 0));
