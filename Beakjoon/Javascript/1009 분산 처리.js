const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];
const arr = input.slice(1).map((el) => el.split(" "));

const answer = [];

for (let i = 0; i < t; i++) {
  const [a, b] = arr[i];

  const ra = +a.slice(-1);
  const rb = +b;

  switch (ra) {
    case 1:
      answer.push(1);
      break;
    case 2:
      answer.push(rb % 4 === 0 ? 6 : rb % 4 === 1 ? 2 : rb % 4 === 2 ? 4 : 8);
      break;
    case 3:
      answer.push(rb % 4 === 0 ? 1 : rb % 4 === 1 ? 3 : rb % 4 === 2 ? 9 : 7);
      break;
    case 4:
      answer.push(rb % 2 === 0 ? 6 : 4);
      break;
    case 5:
      answer.push(5);
      break;
    case 6:
      answer.push(6);
      break;
    case 7:
      answer.push(rb % 4 === 0 ? 1 : rb % 4 === 1 ? 7 : rb % 4 === 2 ? 9 : 3);
      break;
    case 8:
      answer.push(rb % 4 === 0 ? 6 : rb % 4 === 1 ? 8 : rb % 4 === 2 ? 4 : 2);
      break;
    case 9:
      answer.push(rb % 2 === 0 ? 1 : 9);
      break;
    case 0:
      answer.push(10);
      break;
  }
}

console.log(answer.join("\n"));

// 1 -> 1
// 2 -> 2 4 8 6
// 3 -> 3 9 7 1
// 4 -> 4 6
// 5 -> 5
// 6 -> 6
// 7 -> 7 9 3 1
// 8 -> 8 4 2 6
// 9 -> 9 1
