const [input1, input2] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, m] = input1.split(" ").map((el) => +el);
const arr = input2.split(" ").map((el) => +el);
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] + arr[j] + arr[k] <= m) {
        answer = Math.max(answer, arr[i] + arr[j] + arr[k]);
      }
    }
  }
}

console.log(answer);
