const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
let answer = 0;

console.log(str);

function isUpperCase(str) {
  return str === str.toUpperCase();
}

let count = 0;

for (let i = 0; i < str.length; i++) {
  const char = str[i];

  if (isUpperCase(char)) {
    count++;
  } else {
  }

  answer++;
}
