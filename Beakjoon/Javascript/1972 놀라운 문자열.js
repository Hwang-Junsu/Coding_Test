const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.pop();
const answer = [];
const dPair = (str) => {
    for(let i = 1 ; i <= str.length-2; i++) {
        const hash = {};
        for(let j = 0; j < str.length; j++) {
            if(j+i > str.length-1) continue;
            const nPair = str[j]+str[j+i];
            if(!hash[nPair]) hash[nPair] = 0;
            hash[nPair]++;
        }
        if(Object.values(hash).some(el=>el > 1)) return false;
    }
    return true;
}

arr.forEach((str)=>{
    if(dPair(str)) answer.push(`${str} is surprising.`);
    else answer.push(`${str} is NOT surprising.`)
})

console.log(answer.join('\n'))