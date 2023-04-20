const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = [];
let [n, _] = input[0].split(' ').map(el=>+el);
let count = n; let price = 0;
for(let i = 1 ; i < input.length; i++) {
    arr.push(input[i].split(' ').map(el=>+el));
}

const six = Math.min(...arr.map(el=>el[0]));
const one = Math.min(...arr.map(el=>el[1]));

while(count >= 6) {
    if(six > one*6) {
        price += one*6;
        count -= 6;
    } else {
        price += six;
        count -= 6;
    }
}

if(six > count*one) {
    price += count*one;
} else {
    price += six;
}


console.log(price);