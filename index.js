const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const board = input.slice(1).map((el) => el.split(" "));
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

let answer = "NO";

// 선생님의 감시에 걸리는지 여부

const [sequence, teachers, students] = getInfomation();

function supervise() {
  teachers.forEach(([ty, tx]) => {
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = dir[i];
      let ny = dy + ty;
      let nx = dx + tx;
      while (true) {
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) break;
        if (board[ny][nx] === "O") break;
        if (board[ny][nx] === "S") {
          return true;
        }
        ny += ty;
        nx += tx;
      }
    }
  });

  return false;
}

// dfs
function dfs() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

function setObstacle(y, x, value) {
  board[y][x] = value;
}

function getInfomation() {
  const seq = [];
  const t = [];
  const s = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "T") t.push([i, j]);
      if (board[i][j] === "S") s.push([i, j]);
      seq.push([i, j]);
    }
  }
  return [seq, t, s];
}

function printBoard(board) {
  let answer = "";
  board.forEach((el) => (answer += el.join("") + "\n"));
  console.log(answer);
}

dfs(0, 0);
