const n = +require("fs").readFileSync("/dev/stdin").toString().trim();

const cards = Array.from({length:n}, (_, idx)=>idx+1);
const answer = [];

while(true) {
    answer.push(cards.shift());
    if(cards.length === 0)break;
    cards.push(cards.shift());
}

console.log(answer.join(' '));