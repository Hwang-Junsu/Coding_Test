const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

let mostKill = 0;

for (let i = 0; i < n; i++) {
  const height = arr[i];
  let kill = 0;

  for (let j = i + 1; j < n; j++) {
    if (height >= arr[j]) kill++;
    else break;
  }

  mostKill = mostKill < kill ? kill : mostKill;
}

console.log(mostKill);
