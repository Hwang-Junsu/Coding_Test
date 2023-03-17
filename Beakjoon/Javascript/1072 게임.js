const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [x, y] = input[0].split(' ').map(el=>+el);


const rate = (x,y)=>Math.floor(100*y/x);
const z = rate(x,y);

let left = 1;
let right = 1000000000;
let mid = Math.floor((left+right)/2);

if(x === y) {
    console.log(-1);
}
else {

while(left <= right) {
    if(z === rate(x+mid, y+mid)) {
        left = mid+1;
    } else {
        right = mid-1;
    }
    mid = Math.floor((left+right)/2);
}

console.log(mid === 1000000000 ? -1 : mid+1);
}
