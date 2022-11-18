const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const init = Number(input);
let number = Number(input);
let count = 0;
let num1 = parseInt(number / 10);
let num2 = number % 10;

while (true) {
    let temp = num1 + num2;
    const num = num2 * 10 + (temp % 10);
    count++;
    if (num === init) break;
    num1 = parseInt(num / 10);
    num2 = num % 10;
}

console.log(count);
