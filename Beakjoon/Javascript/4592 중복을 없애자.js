const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";
const arr = input.slice(0, -1).map((el) => el.split(" ").map(Number));

for (let i = 0; i < arr.length; i++) {
  const [n, ...numbers] = arr[i];

  const temp = [numbers[0]];

  for (let j = 1; j < n; j++) {
    if (numbers[j - 1] !== numbers[j]) temp.push(numbers[j]);
  }

  answer += `${temp.join(" ")} $${i !== arr.length - 1 ? "\n" : ""}`;
}

console.log(answer);
