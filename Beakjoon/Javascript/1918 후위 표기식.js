const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const priority = { "(": 0, "+": 1, "-": 1, "*": 2, "/": 2 };
const operators = ["(", "+", "-", "*", "/", ")"];
let answer = "";
const stack = [];

for (let i = 0; i < input.length; i++) {
  if (operators.includes(input[i])) {
    if (stack.length === 0 || input[i] === "(") {
      stack.push(input[i]);
      continue;
    }
    if (input[i] === ")") {
      while (true) {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          break;
        }
        answer += stack.pop();
      }
    } else {
      while (true) {
        if (stack.length === 0) break;
        if (priority[stack[stack.length - 1]] < priority[input[i]]) {
          break;
        }
        answer += stack.pop();
      }
      stack.push(input[i]);
    }
  } else {
    answer += input[i];
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
