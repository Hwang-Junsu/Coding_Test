const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s] = input[0].split(' ').map(el=>+el);
const arr = input[1].split(' ').map(el=>+el);

let answer = 0;

const solution = (index, sum, count, limit) => {

    if(count === limit) {
        if(sum === s) {
        answer++;
        }    
        return;
    }

    for(let i = index ; i < n; i++) {
        solution(i+1, sum + arr[i], count+1, limit);
    }
}

for(let i = 0 ; i < n; i++) {
    solution(0, 0, 0, i+1);
}

console.log(answer);