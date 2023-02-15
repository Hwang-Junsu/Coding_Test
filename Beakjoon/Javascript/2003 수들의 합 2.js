const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = arr[0].split(' ').map(el => +el);
const numbers = arr[1].split(' ').map(el => +el);

let left = 0;
let right = 0;

let count = 0;
let sum = 0;

while(true) {
    if(left > n-1) break;

    if(sum >= m || right === n) {
        sum -= numbers[left];
        left++;
    }
    else {
        sum += numbers[right];
        right++
    }
    if(sum === m) count++;
}

console.log(count);