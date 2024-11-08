const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = +input[0];
const arr = input.slice(1).map((el) => {
  const splitEl = el.split(" ");
  if (splitEl.length > 1) splitEl[1] = +splitEl[1];
  return splitEl;
});

class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(x) {
    this.queue[this.rear++] = x;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getFront() {
    return this.queue[this.front] ?? -1;
  }

  getRear() {
    return this.queue[this.rear - 1] ?? -1;
  }
}

const q = new Queue();

let answer = "";

for (let i = 0; i < n; i++) {
  const [order, x] = arr[i];
  let isEscape = true;
  if (order === "push") {
    q.enqueue(x);
    isEscape = false;
  } else if (order === "front") {
    answer += `${q.getFront()}`;
  } else if (order === "back") {
    answer += `${q.getRear()}`;
  } else if (order === "size") {
    answer += `${q.size()}`;
  } else if (order === "pop") {
    answer += `${q.dequeue() ?? -1}`;
  } else if (order === "empty") {
    answer += `${q.isEmpty() ? 1 : 0}`;
  }

  if (isEscape && i < n - 1) answer += "\n";
}

console.log(answer);
