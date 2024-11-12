const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const answer = [];

arr.sort((a, b) => a - b);

function solution(index, tempArr) {
  if (tempArr.length === m) {
    answer.push(tempArr);
    return;
  }

  for (let i = index; i < n; i++) {
    solution(i + 1, [...tempArr, arr[i]]);
  }
}
solution(0, []);

answer.forEach((el) => {
  console.log(el.join(" "));
});
