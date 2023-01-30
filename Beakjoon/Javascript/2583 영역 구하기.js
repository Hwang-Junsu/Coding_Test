const arr = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const [m, n, k] = arr
    .shift()
    .split(" ")
    .map((el) => +el);
const indexes = arr.map((el) => el.split(" ").map((el) => +el));
const answer = [];
const paper = Array.from({length: m}, () => Array.from({length: n}, () => 0));
const visited = Array.from({length: m}, () =>
    Array.from({length: n}, () => false)
);

const drawPaper = (paper, x1, y1, x2, y2) => {
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            paper[i][j] = 1;
        }
    }
};

for (let i = 0; i < k; i++) {
    drawPaper(
        paper,
        indexes[i][0],
        indexes[i][1],
        indexes[i][2],
        indexes[i][3]
    );
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let count = 0;

const dfs = (x, y) => {
    if (paper[x][y] === 1 || visited[x][y]) return;
    visited[x][y] = true;
    count++;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= m || ny >= n || nx < 0 || ny < 0) continue;
        if (visited[nx][ny]) continue;
        if (paper[nx][ny] === 1) continue;

        dfs(nx, ny);
    }
};

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        count = 0;
        dfs(i, j);
        count > 0 ? answer.push(count) : null;
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));

// 그래프 탐색 문제
