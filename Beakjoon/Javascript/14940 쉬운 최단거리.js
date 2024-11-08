const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(x) {
    this.queue[this.rear] = x;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const element = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return element;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const findStart = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) return [i, j];
    }
  }
};

const drawWall = (arr, visited) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) visited[i][j] = 0;
    }
  }
};

const bfs = () => {
  const distance = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => -1)
  );
  drawWall(arr, visited);

  const [sx, sy] = findStart();

  visited[sx][sy] = 0;

  const q = new Queue();
  q.enqueue([sx, sy]);

  while (!q.isEmpty()) {
    const [x, y] = q.dequeue();

    for (let i = 0; i < distance.length; i++) {
      const nx = x + distance[i][0];
      const ny = y + distance[i][1];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (visited[nx][ny] > -1) continue;

      if (arr[nx][ny] === 0) {
        visited[nx][ny] = 0;
        continue;
      }

      if (arr[nx][ny] === 1) {
        visited[nx][ny] = visited[x][y] + 1;
        q.enqueue([nx, ny]);
      }
    }
  }

  return visited;
};

const print = (arr) => {
  arr.forEach((el) => {
    console.log(el.join(" "));
  });
};

print(bfs());
