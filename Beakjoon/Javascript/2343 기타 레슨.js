const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(el=>+el);
const arr = input[1].split(' ').map(el=>+el);

let left = Math.max(...arr);
let right = arr.reduce((prev,cur)=>prev+cur);
let mid = Math.floor((left + right) / 2)
while(left < right) {

    let blueray = 1; let sum = 0;
    for(let i = 0 ; i < n; i++) {
        sum += arr[i];
        if(sum > mid) {
            blueray += 1;
            sum = arr[i];
        }
    }

    if(blueray <= m) {
        right = mid;
    } else {
        left = mid + 1;
    }
    mid = Math.floor((left + right) / 2)
}

console.log(mid);