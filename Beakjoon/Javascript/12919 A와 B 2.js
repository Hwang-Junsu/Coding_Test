const [s,t] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 일단 길이가 맞아야함 => base case
const answer = [];
const solution = (s, target) => {
    if(!target.includes(s) && !target.includes([...s].reverse().join(''))) return;
    if(s.length === target.length) {
        return answer.push(s);
    }
    
    solution(s + "A", target);
    solution([...s+"B"].reverse().join(''), target)
}

solution(s, t);

console.log(answer.includes(t) ? 1 : 0);