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

const input = require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const n = +input[0];

const queue = new Queue();
const answer = [];
for (let i = 1; i <= n; i++) {
    const temp = input[i].split(" ");

    if (temp[0] === "push") {
        queue.enqueue(+temp[1]);
    }
    if (temp[0] === "pop") {
        answer.push(queue.dequeue());
    }
    if (temp[0] === "size") {
        answer.push(queue.getSize());
    }
    if (temp[0] === "empty") {
        answer.push(queue.empty());
    }
    if (temp[0] === "front") {
        answer.push(queue.front());
    }
    if (temp[0] === "back") {
        answer.push(queue.back());
    }
}
console.log(answer.join("\n"));
