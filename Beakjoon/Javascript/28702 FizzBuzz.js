const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;

const convert = (number) => {
  if (number % 15 === 0) {
    return FIZZBUZZ;
  }
  if (number % 5 === 0) {
    return BUZZ;
  }
  if (number % 3 === 0) {
    return FIZZ;
  }
  return number;
};

const print = () => {
  let answer = null;
  if (+a) {
    answer = convert(+a + 3);
  } else if (+b) {
    answer = convert(+b + 2);
  } else if (+c) {
    answer = convert(+c + 1);
  }
  return answer;
};

console.log(print());
