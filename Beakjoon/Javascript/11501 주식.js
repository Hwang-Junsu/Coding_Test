const isMac = process.platform === "darwin";

let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const testCase = +input[0];

for (let t = 0; t < testCase * 2; t += 2) {
  const n = +input[t + 1];
  const arr = input[t + 2].split(" ").map(Number);

  let answer = 0;
  let max = 0;

  for (let i = n; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (max - arr[i] > 0) answer += max - arr[i];
  }

  console.log(answer);
}
