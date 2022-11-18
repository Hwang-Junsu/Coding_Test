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

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  const queue = new Queue();

  queue.enqueue([0, 0]);
  visited[0][0] = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length !== 0) {
    const v = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = v[0] + dx[i];
      const ny = v[1] + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (visited[nx][ny] > 0 || maps[nx][ny] === 0) continue;

      visited[nx][ny] = visited[v[0]][v[1]] + 1;
      queue.enqueue([nx, ny]);
    }
  }
  return visited[n - 1][m - 1] === 0 ? -1 : visited[n - 1][m - 1];
}
