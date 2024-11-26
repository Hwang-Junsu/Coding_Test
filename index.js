const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sudoku = input.map((el) => el.split("").map(Number));

const answer = [];
const sequence = getSequence();
const seqLen = sequence.length;

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

function dfs(index, board) {
  if (index === seqLen) {
    answer.push(board);
    return true;
  }

  const [cx, cy] = sequence[index];

  if (board[cx][cy] > 0) {
    return dfs(index + 1, board);
  }

  for (let v = 1; v <= 9; v++) {
    if (canPlace(v, cx, cy, board)) {
      const newBoard = board.map((row) => [...row]);
      newBoard[cx][cy] = v;
      if (dfs(index + 1, newBoard)) {
        return true;
      }
      board[cx][cy] = 0;
    }
  }

  return false;
}

dfs(0, sudoku);
printBoard(answer[0]);

function printBoard(board) {
  let answer = "";
  board.forEach((el) => (answer += el.join("") + "\n"));
  console.log(answer);
}

function getSequence() {
  const seq = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      seq.push([i, j]);
    }
  }
  return seq;
}

// 1. (0,0) 부터 (8,8) 까지 순서대로 순회한다.

// 2. 기존에 값이 있다면 다음으로 넘어간다.
// 3. 기존에 값이 없다면(0) 0~9 까지 canPlace를 판단한다.
// 4. 놓을 숫자가 있다면 해당 숫자를 놓는다
