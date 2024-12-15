const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const str = input[0];

let answer = 0;
let upperMode = false;

const isUpper = (str) => str === str.toUpperCase();

for (let i = 0; i < str.length; i++) {
  const currentChar = str[i];
  const nextChar = str[i + 1];
  const isCurrentUpper = isUpper(currentChar);

  if (isCurrentUpper === upperMode) {
    answer += 1;
  } else {
    if (nextChar && isUpper(nextChar) !== upperMode) {
      answer += 2;
      upperMode = !upperMode;
    } else {
      answer += 2;
    }
  }
}

console.log(answer);
