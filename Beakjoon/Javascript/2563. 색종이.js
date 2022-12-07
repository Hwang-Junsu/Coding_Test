const [input, ...arr] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const n = Number(input);
const index = [];
for (let i = 0; i < n; i++) {
  index.push(arr[i].split(" ").map((el) => +el));
}

const x = Math.max(...index.map((el) => el[0]));
const y = Math.max(...index.map((el) => el[1]));

const paper = Array.from({ length: y + 10 }, () =>
  Array.from({ length: x + 10 }, () => 0)
);

for (let i = 0; i < n; i++) {
  const [sx, sy] = index[i];
  for (let j = sy; j < sy + 10; j++) {
    for (let k = sx; k < sx + 10; k++) {
      if (paper[j][k] === 1) continue;
      paper[j][k] = 1;
      answer++;
    }
  }
}

console.log(answer);
