const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [n, m, r] = input[0].split(" ").map(Number);

const arr = input.slice(1).map((el) => el.split(" ").map(Number));

const rotate90deg = (matrix) => {
  const row = matrix[0].length;
  const col = matrix.length;
  const rotated = Array.from({ length: col }, () =>
    Array.from({ length: row }, () => 0)
  );

  return rotated;
};

console.log(n, m, r, arr, rotate90deg(arr));

(0, 0)(0, 1), (0, 2), (0, 3)();
