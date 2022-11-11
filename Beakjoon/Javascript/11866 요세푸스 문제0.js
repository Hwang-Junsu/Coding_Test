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

const [n, k] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((el) => +el);

const queue = new Queue();
for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
}
let index = 0;
const answer = [];

while (!queue.empty()) {
    if (index === k - 1) {
        index = -1;
        answer.push(queue.dequeue());
    } else {
        queue.enqueue(queue.dequeue());
    }
    index++;
}

console.log(`<${answer.join(", ")}>`);
