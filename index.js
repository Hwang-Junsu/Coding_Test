const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];

const createGrid = (m, n) => {
  const grid = [];

  for (let i = 0; i < m; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    grid.push(arr);
  }

  return grid;
};

const printGrid = (grid) => {
  let str = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      str += `(${i}, ${j}) `;
    }
    str += "\n";
  }

  console.log(str);
};

for (let i = 0; i < t; i++) {
  const [m, n] = input[1 + i].split(" ").map(Number);

  const grid = createGrid(m, n);
  printGrid(grid);
}
