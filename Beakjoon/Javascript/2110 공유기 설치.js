const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, c] = input.shift().split(' ').map(el=>+el);
const arr = input.map(el=>+el);
arr.sort((a,b)=>a-b);

let left = 1;
let right = arr[n-1] - arr[0];
let mid = Math.ceil((left+right)/2);


while(left < right) {
    let count = 1;
    let min = arr[0] + mid;
    for(let i = 1 ; i < n; i++) {
        if(arr[i] >= min) {
            count += 1;
            min = arr[i] + mid;
        }
    };

    if(count < c) {
        right = mid-1;
    } else {
        left = mid;
    }

    mid = Math.ceil((left+right)/2);
}

console.log(mid);