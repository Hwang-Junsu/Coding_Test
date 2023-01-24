const input = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString();

console.log(input);

const stack = [];

for (let i = 0; i < input.length; i++) {
    if (i === 0) {
        stack.push(input[i]);
        continue;
    }
}
