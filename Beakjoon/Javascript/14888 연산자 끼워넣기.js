const [input, numbers, operCount] = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n")
    .map((el) => el.trim())
    .map((el) => el.split(" ").map((el) => +el));

const n = input[0];
const values = [];
const operators = {};

for (let i = 0; i < 4; i++) {
    if (i === 0) operators["+"] = operCount[i];
    if (i === 1) operators["-"] = operCount[i];
    if (i === 2) operators["*"] = operCount[i];
    if (i === 3) operators["/"] = operCount[i];
}

function solution(index, operators, value) {
    if (index === n) {
        values.push(value);
        return;
    }

    if (operators["+"] > 0) {
        const newOperator = {...operators, "+": operators["+"] - 1};
        solution(index + 1, newOperator, value + numbers[index]);
    }
    if (operators["-"] > 0) {
        const newOperator = {...operators, "-": operators["-"] - 1};
        solution(index + 1, newOperator, value - numbers[index]);
    }
    if (operators["*"] > 0) {
        const newOperator = {...operators, "*": operators["*"] - 1};
        solution(index + 1, newOperator, value * numbers[index]);
    }
    if (operators["/"] > 0) {
        const newOperator = {...operators, "/": operators["/"] - 1};
        solution(index + 1, newOperator, parseInt(value / numbers[index]));
    }
}
solution(1, operators, numbers[0]);
const answer = [Math.max(...values), Math.min(...values)];
console.log(answer.join("\n"));
