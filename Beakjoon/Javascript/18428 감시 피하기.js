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

const [sequence, teachers] = getInfomation();

function supervise() {
  for (const [ty, tx] of teachers) {
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = dir[i];
      let ny = ty + dy;
      let nx = tx + dx;
      while (nx >= 0 && ny >= 0 && nx < n && ny < n) {
        if (board[ny][nx] === "O") break;
        if (board[ny][nx] === "S") return true;
        ny += dy;
        nx += dx;
      }
    }
  }
  return false;
}

// dfs
function dfs(selected, depth, idx) {
  if (depth === 3) {
    selected.forEach(([y, x]) => setObstacle(y, x, "O"));

    const caught = supervise();
    selected.forEach(([y, x]) => setObstacle(y, x, "X"));

    if (!caught) {
      answer = "YES";
      return true;
    }
    return false;
  }

  if (idx === sequence.length) {
    return false;
  }

  if (board[sequence[idx][0]][sequence[idx][1]] === "X") {
    selected.push(sequence[idx]);
    if (dfs(selected, depth + 1, idx + 1)) return true;
    selected.pop();
  }

  return dfs(selected, depth, idx + 1);
}

function setObstacle(y, x, value) {
  board[y][x] = value;
}

function getInfomation() {
  const seq = [];
  const t = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "T") t.push([i, j]);
      seq.push([i, j]);
    }
  }
  return [seq, t];
}

function printBoard(board) {
  let answer = "";
  board.forEach((el) => (answer += el.join("") + "\n"));
  console.log(answer);
}

dfs([], 0, 0);

console.log(answer);
