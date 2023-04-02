class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.map((el) => el.split(" ").map((el) => +el));
const [n, e] = arr.shift();
const [v1, v2] = arr.pop();
const graph = {};
let answer = 0;

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < e; i++) {
  const [s, e, w] = arr[i];
  graph[s].push([e, w]);
  graph[e].push([s, w]);
}

const dijkstra = (start, end) => {
  const distances = Array.from({ length: n + 1 }, () => 0);
  const initDistance = () => {
    for (let i = 0; i <= n; i++) {
      distances[i] = Infinity;
    }
  };

  initDistance();

  const q = new PriorityQueue();
  distances[start] = 0;
  q.enqueue([start, 0], 0);

  while (q.values.length) {
    const [nowNode, nowDist] = q.dequeue().val;

    if (nowNode === end) break;

    for (let x of graph[nowNode]) {
      const [nextNode, nextDist] = x;
      if (nowDist + nextDist < distances[nextNode]) {
        distances[nextNode] = nowDist + nextDist;
        q.enqueue([nextNode, distances[nextNode]], distances[nextNode]);
      }
    }
  }
  return distances[end];
};

answer = Math.min(
  dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n),
  dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n)
);

console.log(answer === Infinity ? -1 : answer);
