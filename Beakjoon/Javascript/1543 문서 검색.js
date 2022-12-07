const [input, word] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let document = input;
let count = 0;
while (document.includes(word)) {
  document = document.replace(word, "1");
  count++;
}

console.log(count);
