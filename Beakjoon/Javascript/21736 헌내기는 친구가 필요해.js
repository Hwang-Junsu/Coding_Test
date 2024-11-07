const isMac = process.platform === "darwin";

// X - 벽  P - 사람  I - 나   O - 이동가능

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [_, ...arr] = input;

const [n, m] = input[0].split(" ").map(Number);
const map = arr.map((el) => el.split(""));

function findStart() {
  let start = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === "I") {
        start = [i, j];
        break;
      }
    }
  }
  return start;
}

function solution() {
  let answer = 0;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );

  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];

  function dfs(x, y) {
    if (x >= n || y >= m || x < 0 || y < 0) return;
    if (visited[x][y]) return;
    if (map[x][y] === "X") return;

    visited[x][y] = true;
    if (map[x][y] === "P") answer += 1;

    directions.forEach(([dx, dy]) => dfs(x + dx, y + dy));
  }

  dfs(...findStart());

  return answer ? answer : "TT";
}

console.log(solution());

// 깊이 우선 탐색
