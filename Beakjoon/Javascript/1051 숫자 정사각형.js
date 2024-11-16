const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => Array.from(el));

function isSquare(y, x, size) {
  const val = arr[y][x];

  if (y + size > n || x + size > m) return false;

  return (
    arr[y][x] === val &&
    arr[y][x + size - 1] === val &&
    arr[y + size - 1][x] === val &&
    arr[y + size - 1][x + size - 1] === val
  );
}

let maxSize = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let size = 1; size <= Math.min(n - i, m - j); size++) {
      if (isSquare(i, j, size)) {
        maxSize = Math.max(maxSize, size * size);
      }
    }
  }
}

console.log(maxSize);
