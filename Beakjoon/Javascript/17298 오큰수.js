const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(el=>+el);

const NGE = Array(n).fill(-1);
const stack = [];

for(let i = 0; i < n-1; i++) {
    if(arr[i] < arr[i+1]) {
        NGE[i] = arr[i+1]

        while(stack.length) {
        const [value, index] = stack[stack.length-1];
        if(arr[i+1] > value) {
            NGE[index] = arr[i+1];
            stack.pop();
        } else break;
    }
    
    }
    else stack.push([arr[i], i]);
}


console.log(NGE.join(' '));