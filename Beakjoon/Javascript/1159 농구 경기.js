const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +arr.shift();
const answer = [];
const dict = {};

for(let i = 0; i < n; i++) {
    const prefix = arr[i][0];
    if(!dict[prefix]) dict[prefix] = 0;
    dict[prefix]++;
}

Object.keys(dict).forEach(key=>{
    if(dict[key] >= 5) answer.push(key);
})
answer.sort();

console.log(answer.length ? answer.join('') : 'PREDAJA');