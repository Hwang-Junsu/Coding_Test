const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sudoku = input.map((el) => el.split("").map(Number));

const answer = [];

function canPlace(value, i, j, board) {
  // 일자로 중복되는게 있으면 false
  for (let x = 0; x < 9; x++) {
    if (board[i][x] === value) return false;
    if (board[x][j] === value) return false;
  }
  let sx = Math.floor(i / 3) * 3;
  let ex = sx + 3;
  let sy = Math.floor(j / 3) * 3;
  let ey = sy + 3;
  // 3 x 3 정사각형 구역에 중복되는게 있으면 false;
  for (let a = sx; a < ex; a++) {
    for (let b = sy; b < ey; b++) {
      if (board[a][b] === value) return false;
    }
  }
  return true;
}

let count = 0;

function dfs(i, j, board, isEnd) {
  // if (count === 1) return printBoard(board);
  if (isEnd) return;
  if (checkBlank(board)) return printBoard(board);
  if (i === 8 && j === 8) return printBoard(board);

  count++;
  for (let y = i; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (y === i && x === 0) x = j;

      if (board[y][x] > 0) continue;

      for (let v = 1; v <= 9; v++) {
        const newBoard = [...board];
        if (canPlace(v, y, x, board)) {
          newBoard[y][x] = v;
          dfs(y, x, newBoard, false);
        } else {
          dfs(y, x, newBoard, true);
        }
      }
    }
  }
}

dfs(0, 0, sudoku, false);

function checkBlank(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
    }
  }
  return true;
}

function printBoard(board) {
  board.forEach((el) => console.log(el.join(" ")));
  console.log("\n");
}
