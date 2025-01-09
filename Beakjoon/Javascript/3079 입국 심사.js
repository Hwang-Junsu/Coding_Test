// parametric search 문제
// 숫자 overflow 발생으로 계산이 제대로 되지 않아 시간초과 발생
// BigInt 처리 해야함

const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

let start = 1n;
let end = BigInt(Math.max(...arr)) * BigInt(m);

while (start <= end) {
  const mid = (start + end) / 2n;

  let count = 0n;
  for (let i = 0; i < n; i++) {
    count += mid / BigInt(arr[i]);
  }

  if (count < BigInt(m)) {
    start = mid + 1n;
  } else {
    end = mid - 1n;
  }
}

console.log(start.toString());
