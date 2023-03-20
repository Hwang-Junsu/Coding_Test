const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let answer = Infinity;


for(let i = 0 ; i <= b.length - a.length; i++) {
    let count = 0;
    for(let j = i; j < i + a.length; j++) {

        if(b[j] !== a[j-i]) count++;

    }
    answer = Math.min(count, answer);
}

console.log(answer);