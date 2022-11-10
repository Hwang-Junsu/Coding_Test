const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

const factorialRecursion = (number) => {
    if (number === 0 || number === 1) return 1;
    return factorial(number - 1) * number;
};

console.log(factorialRecursion(n));

const factorial = (number) => {
    if (number === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial(n));
