const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(el => +el);
const arr = input[1].split(' ').map(el=>+el);
let count = 0;
for(let i = n ; i > 0 ; i--) {
    for(let j = 0 ; j < i-1 ; j++) {
        if(arr[j] > arr[j+1]) {
            count++;
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
        if(count === k) {
            console.log(arr[j], arr[j+1]);
            break;
        }
    }
    if(count === k) {
        break;
    }
}

if(count < k) console.log(-1)
