const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [u, n] = input[0].split(" ").map(Number);
const arr = input
  .slice(1)
  .map((el) => el.split(" "))
  .map((el) => [el[0], +el[1]]);

let dict = {};

for (let i = 0; i < n; i++) {
  const [, price] = arr[i];
  dict[price] = dict[price] ? dict[price] + 1 : 1;
}

arr.sort((a, b) => {
  if (dict[a[1]] < dict[b[1]]) {
    return -1;
  }
  if (dict[a[1]] > dict[b[1]]) {
    return 1;
  }
  if (+a[1] > +b[1]) {
    return 1;
  }
  if (+a[1] < +b[1]) {
    return -1;
  }
  return 0;
});

console.log(arr[0].join(" "));
