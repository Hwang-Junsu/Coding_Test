const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const n = +input[0];
const arr = input[1].split(' ').map(el=>+el);


let left = 0;
let right = arr.length-1;
let min = -Infinity;
let answer = [0, 0];

while(left < right) {

    const sum = arr[left] + arr[right];
    
    if(Math.abs(min) > Math.abs(sum)) {
        min = Math.abs(sum);
        answer[0] = left;
        answer[1] = right;
    }

    if(sum == 0) break;
    if(sum > 0) right--;
    else left++;
}

console.log(`${arr[answer[0]]} ${arr[answer[1]]}`)