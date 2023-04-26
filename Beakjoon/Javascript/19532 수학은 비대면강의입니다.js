const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const arr = input.split(' ').map(el=>+el);
let x;
let y;
let isBreak = false;
for(x = -1000; x <= 1000; x++) {
    for(y = -1000; y <= 1000; y++) {
        if(arr[0]*x + arr[1]*y === arr[2] && arr[3]*x + arr[4]*y === arr[5]) {
            isBreak= true;
            break;   
        }
    }
    if(isBreak) break;
}
console.log(x,y);