// 큐
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.head) return -1;
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  getSize() {
    return this.length;
  }

  front() {
    if (!this.length) return -1;
    return this.head.data;
  }

  back() {
    if (!this.length) return -1;
    return this.tail.data;
  }
}

// constant
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const matrix = input.map((el) => el.split(" ").map((el) => +el));
let save = null;
let visited = null;
let answer = 0;
let cheese = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === 1) cheese++;
  }
}

const divideAir = (matrix) => {
  matrix[0][0] = -1;
  const queue = new Queue();
  queue.enqueue([0, 0]);

  while (!queue.empty()) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (matrix[nx][ny] !== 0) continue;

      matrix[nx][ny] = -1;
      queue.enqueue([nx, ny]);
    }
  }
};

const initAir = (matrix) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) matrix[i][j] = 0;
    }
  }
};
const isMelt = (matrix, x, y) => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (matrix[nx][ny] === -1) count++;
    if (count >= 2) break;
  }
  return count >= 2;
};
const convertCheese = (matrix, sx, sy) => {
  if (matrix[sx][sy] !== 1) return;
  if (visited[sx][sy]) return;
  visited[sx][sy] = true;
  const queue = new Queue();
  queue.enqueue([sx, sy]);

  while (!queue.empty()) {
    const [x, y] = queue.dequeue();

    if (isMelt(matrix, x, y)) {
      matrix[x][y] = 2;
      save.push([x, y]);
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (matrix[nx][ny] !== 1) continue;
      if (visited[nx][ny]) continue;

      queue.enqueue([nx, ny]);
      visited[nx][ny] = true;
    }
  }
};

while (true) {
  answer++;
  save = [];
  initAir(matrix);
  divideAir(matrix);

  visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      convertCheese(matrix, i, j);
    }
  }

  for (let i = 0; i < save.length; i++) {
    const [x, y] = save[i];
    matrix[x][y] = -1;
    cheese--;
  }
  if (cheese <= 0) break;
}

console.log(answer);
