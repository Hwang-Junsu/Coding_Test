const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(el=>+el);
arr.sort((a,b)=>b-a);

const solution = (n, arr) => {

    if(n === 1) return arr[0];

    let gold = 0;

    for(let i = 0 ; i < n-1; i++) {
        gold += arr[i] + arr[i+1];
        arr[i+1] = Math.max(arr[i], arr[i+1]);
    }

    return gold;
}

console.log(solution(n, arr))