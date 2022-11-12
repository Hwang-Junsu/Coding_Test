const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((el) => +el).reverse();

const stack = [];
const answer = [];
const numbers = Array.from({ length: n }, (_, idx) => idx + 1).reverse();

while (numbers.length) {
  stack.push(numbers.pop());
  answer.push("+");

  while (true) {
    if (stack.length === 0 || stack[stack.length - 1] !== arr[arr.length - 1])
      break;
    stack.pop();
    arr.pop();
    answer.push("-");
  }
}

if (arr.length === 0) console.log(answer.join("\n"));
else console.log("NO");
