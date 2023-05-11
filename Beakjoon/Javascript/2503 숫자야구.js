const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(el=>el.split(' ').map(el=>+el));

const possibleNumbers = [];
let answer = 0;
for(let i = 123; i <= 987; i++) {
    const str = String(i);
    
    if(str.includes("0")) continue;
    if(str[0] === str[1] || str[1] === str[2] || str[0] === str[2]) continue;
    possibleNumbers.push(str);
}

const compare = (std, target) => {
    const stdToString = std;
    const targetToString = String(target);
    let b = 0;
    let s = 0;
    for(let i = 0 ; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(i === j && stdToString[i] === targetToString[j]) s++;
            else if(stdToString[i] === targetToString[j]) b++;
        }
    }
    return {b, s};
}

for(let i = 0 ; i < possibleNumbers.length ; i++) {
    const number = possibleNumbers[i];
    let isPossible = true;
    for(let j = 0; j < n; j++) {
        const [baseball, strike, ball] = arr[j];

        const {b, s} = compare(number, baseball);

        if(ball !== b || strike !== s) {
            isPossible = false;
            break;
        }
    }
    if(isPossible) {
        answer++;
    }
}

console.log(answer);