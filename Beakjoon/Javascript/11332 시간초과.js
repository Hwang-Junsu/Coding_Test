const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input.slice(1).map((el) => el.split(" "));

const force = 100000000;

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

for (let i = 0; i < n; i++) {
  const complex = arr[i][0];
  const [n, t, l] = arr[i].slice(1).map(Number);

  switch (complex) {
    case "O(N)":
      if (l * force < n * t) {
        console.log("TLE!");
      } else {
        console.log("May Pass.");
      }
      break;
    case "O(2^N)":
      if (l * force < 2 ** n * t) {
        console.log("TLE!");
      } else {
        console.log("May Pass.");
      }
      break;
    case "O(N!)":
      if (l * force < t * factorial(n)) {
        console.log("TLE!");
      } else {
        console.log("May Pass.");
      }
      break;
    case "O(N^3)":
      if (l * force < n * n * n * t) {
        console.log("TLE!");
      } else {
        console.log("May Pass.");
      }
      break;
    case "O(N^2)":
      if (l * force < n * n * t) {
        console.log("TLE!");
      } else {
        console.log("May Pass.");
      }
      break;
  }
}
