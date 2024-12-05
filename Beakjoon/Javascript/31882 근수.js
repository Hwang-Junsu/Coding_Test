const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const s = input[1];

let answer = BigInt(0);
let count = 0;

const getSum = (count) => {
  let sum = BigInt(0);
  for (let i = 1; i <= count; i++) {
    sum += BigInt(i * (count - i + 1));
  }

  return sum;
};

for (let i = 0; i < n; i++) {
  if (s[i] === "2") {
    count++;
  } else {
    answer += getSum(count);
    count = 0;
  }

  if (i === n - 1 && count > 0) {
    answer += getSum(count);
  }
}

console.log(answer.toString());
