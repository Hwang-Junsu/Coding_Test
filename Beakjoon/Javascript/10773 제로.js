const stack = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const n = stack.shift();

const arr = [];

//stack을 순회할 반복문.
for (let i = 0; i < n; i++) {
  if (stack[i] !== 0) {
    arr.push(stack[i]);
  } else {
    arr.pop();
  }
}

console.log(arr.reduce((prev, cur) => prev + cur, 0));
