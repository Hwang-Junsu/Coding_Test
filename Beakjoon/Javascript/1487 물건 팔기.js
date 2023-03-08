const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(el=>el.split(' ').map(el=>+el));

arr.sort((a,b)=>a[0]-b[0]);

let max = 0;
let answer = 0;

for(let i = 0 ; i < n; i++) {
    const [price] = arr[i];
    let sum = 0;
    for(let j = 0; j < n; j++) {
        const [payment, deliveryFee] = arr[j];
        if(price <= payment && price - deliveryFee >= 0) {
            sum += (price - deliveryFee);
        }
    }

    if(max < sum) {
        max = sum;
        answer = price;
    }
}

console.log(answer);