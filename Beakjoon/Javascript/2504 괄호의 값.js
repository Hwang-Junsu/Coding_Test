const str = require("fs").readFileSync("/dev/stdin").toString();

const stack = [];
let answer = 0;
let value = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    stack.push(str[i]);
    value *= 2;
  } else if (str[i] === "[") {
    stack.push(str[i]);
    value *= 3;
  } else if (str[i] === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      answer = 0;
      break;
    } else if (str[i - 1] === "(") {
      answer += value;
    }
    stack.pop();
    value = parseInt(value / 2);
  } else if (str[i] === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      answer = 0;
      break;
    } else if (str[i - 1] === "[") {
      answer += value;
    }
    stack.pop();
    value = parseInt(value / 3);
  }
}

console.log(stack.length === 0 ? answer : 0);
