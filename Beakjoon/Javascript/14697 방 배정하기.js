const [a, b, c, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

let isPossible = false;

for (let i = 0; i < parseInt(300 / a); i++) {
  for (let j = 0; j < parseInt(300 / b); j++) {
    for (let k = 0; k < parseInt(300 / c); k++) {
      if (i * a + j * b + k * c === n) {
        isPossible = true;
        break;
      }
    }
  }
}

console.log(isPossible ? 1 : 0);
