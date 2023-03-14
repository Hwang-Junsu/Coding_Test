const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = "";
let temp = [];
let isProtected = false;
for(let i = 0 ; i < input.length; i++) {

    const char = input[i];

    if(char === '<') {
        if(temp.length > 0) {
            while(temp.length !== 0) {
            answer += temp.pop();
            }
        }
        isProtected = true;
        temp.push(char);
    }
    else if(char === '>') {
        temp.push(char);
        answer += temp.join('');
        temp = [];
        isProtected = false;
    }
    else if(char === ' ' && !isProtected) {
        while(temp.length !== 0) {
            answer += temp.pop();
        }
        answer += ' '
    }
    else {
        temp.push(char);
    }

    if(i === input.length-1 && temp.length > 0) {
        while(temp.length !== 0) {
            answer += temp.pop();
        }
    }
}

console.log(answer);