const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const n = +input[i];
  let sum = BigInt(0);
  let j;
  for (j = i + 1; j <= i + n; j++) {
    sum += BigInt(input[j]);
  }
  console.log(sum === BigInt(0) ? 0 : sum > BigInt(0) ? "+" : "-");
  i = j - 1;
}
