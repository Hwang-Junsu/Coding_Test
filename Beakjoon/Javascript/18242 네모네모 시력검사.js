const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(""));

function getStartIndexAndLength() {
  let startIndex = null;
  let length = 0;
  let start = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!startIndex && arr[i][j] === "#") {
        startIndex = [i, j];
        start = j;
      }
      if (arr[i][j] === "#") {
        length = j - start + 1;
      }
    }
  }

  return { startIndex, length };
}

const { startIndex, length } = getStartIndexAndLength();
const half = Math.floor(length / 2);

let answer = "";

if (arr[startIndex[0] + half][startIndex[1]] === ".") {
  console.log("LEFT");
}
if (arr[startIndex[0]][startIndex[1] + half] === ".") {
  console.log("UP");
}
if (arr[startIndex[0] + length - 1][startIndex[1] + half] === ".") {
  console.log("DOWN");
}
if (arr[startIndex[0] + half][startIndex[1] + length - 1] === ".") {
  console.log("RIGHT");
}
