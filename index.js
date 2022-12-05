const [a, b, c, n] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const length = parseInt(n / c);

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    for (let k = 0; j < length; k++) {
      console.log(i * a + j * b + k * c);
    }
  }
}

console.log(a, b, c, n);
