const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, p] = input.shift().split(' ').map(el=>+el);
const arr = input.map(el=>el.split(' ').map(el=>+el));

const stack = {};
for(let i = 0 ; i < n; i++) {
    stack[arr[i][0]] = [];
}

let count = 0;
for(let i = 0 ; i < n; i++) {
    const [scale, fret] = arr[i];
    const scaleStack = stack[scale];

    if(scaleStack.length === 0 || scaleStack[scaleStack.length-1][1] < fret) {
        scaleStack.push(arr[i]);
        count++;
    } else if(scaleStack[scaleStack.length-1][1] > fret) {
        while(true) {
            if(!scaleStack.length || scaleStack[scaleStack.length-1][1] <= fret) break;
            scaleStack.pop();
            count++;
        }
        if(!scaleStack.length || scaleStack[scaleStack.length-1][1] !== fret) {
            scaleStack.push(arr[i]);
            count++;
        }
    }
}

console.log(count);