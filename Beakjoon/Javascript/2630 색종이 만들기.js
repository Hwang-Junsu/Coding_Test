const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [n, ...arr] = input;

const size = +n;
const paper = arr.map((el) => el.split(" ").map((el) => +el));

let white = 0;
let black = 0;

function isBlackPaper(sx, sy, ex, ey) {
  let isBlack = true;
  for (let i = sx; i < ex; i++) {
    for (let j = sy; j < ey; j++) {
      if (paper[i][j] !== 1) {
        return false;
      }
    }
  }
  return isBlack;
}

function isWhitePaper(sx, sy, ex, ey) {
  let isWhite = true;
  for (let i = sx; i < ex; i++) {
    for (let j = sy; j < ey; j++) {
      if (paper[i][j] !== 0) {
        return false;
      }
    }
  }
  return isWhite;
}

function solution(size, sx, sy, ex, ey) {
  if (size === 1) {
    paper[sx][sy] ? (black += 1) : (white += 1);
    return;
  }

  if (isWhitePaper(sx, sy, ex, ey)) {
    white += 1;
    return;
  }

  if (isBlackPaper(sx, sy, ex, ey)) {
    black += 1;
    return;
  }
  const half = Math.floor(size / 2);

  solution(half, sx, sy, ex - half, ey - half);
  solution(half, sx + half, sy + half, ex, ey);
  solution(half, sx, sy + half, ex - half, ey);
  solution(half, sx + half, sy, ex, ey - half);
}

solution(size, 0, 0, size, size);

console.log(white);
console.log(black);
