const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const arr = input.slice(1).map(Number);
  let answer = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 !== 0) answer += arr[i];
  }

  console.log(answer);

  process.exit();
});
