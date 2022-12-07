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

const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el)
  .reverse();
const n = arr.pop();
const queue = new Queue();
let size = 0;

while (true) {
  const number = arr.pop();
  if (number === -1) break;

  if (number !== 0) {
    if (size >= n) continue;
    queue.enqueue(number);
    size++;
  } else {
    queue.dequeue();
    size--;
  }
}

const answer = [];
while (!queue.empty()) {
  answer.push(queue.dequeue());
}

console.log(answer.join(" ") === "" ? "empty" : answer.join(" "));
