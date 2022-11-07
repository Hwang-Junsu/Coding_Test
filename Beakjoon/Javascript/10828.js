class Stack {
    constructor() {
        this.arr = [];
        this.index = -1;
    }
    push(number) {
        this.index++;
        this.arr.push(number);
    }
    pop() {
        if (this.index === -1) return -1;
        const x = this.arr.pop();
        this.index--;
        return x;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.index === -1 ? 1 : 0;
    }
    top() {
        return this.index === -1 ? -1 : this.arr[this.index];
    }
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const n = Number(input[0]);
const stack = new Stack();
const arr = [];

for (let i = 1; i <= n; i++) {
    const temp = input[i].split(" ");
    const order = temp[0];

    if (order === "push") {
        stack.push(Number(temp[1]));
    }
    if (order === "pop") {
        arr.push(stack.pop());
    }
    if (order === "top") {
        arr.push(stack.top());
    }
    if (order === "empty") {
        arr.push(stack.empty());
    }
    if (order === "size") {
        arr.push(stack.size());
    }
}

console.log(arr.join("\n"));
