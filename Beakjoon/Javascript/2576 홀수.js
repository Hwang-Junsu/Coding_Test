const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => +el)
    .filter((el) => el % 2 === 1);

arr.length === 0
    ? console.log(-1)
    : console.log(
          arr.reduce((init, current) => init + current, 0),
          Math.min(...arr)
      );
