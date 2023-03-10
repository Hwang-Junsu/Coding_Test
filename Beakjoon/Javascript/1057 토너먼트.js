const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, kim, lim] = input[0].split(' ').map(el=>+el);
let count = 0;

const round = Math.ceil((n-1)**0.5)+1;

let participants = Array.from({length:n}, (_,k)=>k+1 === lim || k+1 === kim ? 0 : 1);

for(let i = 0 ; i < round; i++) {
    let newRound = [];
    for(let j = 0; j < participants.length; j+=2) {
        if(participants[j] === 0 && participants[j] === participants[j+1]) {
            count = i+1;
            break;
        }
        if(j+1 >= participants.length) {
            newRound.push(participants[j]);
            continue;
        }
        if(participants[j] === 0 || participants[j+1] === 0) {
            newRound.push(0);
        } else {
            newRound.push(1);
        }
    }
    if(count !== 0) break;
    participants = newRound;
}

console.log(count === 0 ? -1 : count);