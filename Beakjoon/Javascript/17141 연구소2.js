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
function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const arr = input.map((el) => el.split(" ").map((el) => +el));
let answer = Infinity;

const isPossible = (board) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) return false;
    }
  }
  return true;
};

const virusIndex = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 2) virusIndex.push([i, j]);
  }
}
const wallCheck = (board) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) board[i][j] = -2;
    }
  }
};

const bfs = (virus) => {
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => -1)
  );
  wallCheck(visited);
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let max = 0;

  const queue = new Queue();
  while (virus.length) {
    const popped = virus.pop();
    visited[popped[0]][popped[1]] = 0;
    queue.enqueue(popped);
  }

  while (queue.length) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (arr[nx][ny] === 1) continue;
      if (visited[nx][ny] > -1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      max = Math.max(max, visited[nx][ny]);
      queue.enqueue([nx, ny]);
    }
  }
  return isPossible(visited) ? max : -1;
};

const combi = getCombinations(
  Array.from({ length: virusIndex.length }, (v, k) => k),
  m
);
for (let i = 0; i < combi.length; i++) {
  const virus = combi[i].map((el) => virusIndex[el]);
  const pos = bfs(virus);
  if (pos !== -1) {
    answer = Math.min(answer, pos);
  }
}

console.log(answer === Infinity ? -1 : answer);
