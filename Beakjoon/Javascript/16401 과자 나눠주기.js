const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let end = Math.max(...arr);
let start = 1;

while (start <= end) {
  let mid = Math.floor((end + start) / 2);
  let count = 0;
  for (let i = 0; i < m; i++) {
    count += Math.floor(arr[i] / mid);
  }

  if (count >= n) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(start - 1);
