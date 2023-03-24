const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(el=>+el);
const stack = [];
const NGF = Array(n).fill(-1);

// 횟수를 저장하는 객체
const F = {};
arr.forEach((el)=>{
    if(!(el in F)) F[el] = 0;
    F[el]++;
})

for(let i = 0 ; i < n-1; i++) {
    const cur = arr[i]; const next = arr[i+1];

    // 바로 찾을 수 있는 경우 ?
    if(F[cur] < F[next]) {
        NGF[i] = next;

        while(stack.length) {
            const [topCur, topIndex] = stack[stack.length-1];
            if(F[topCur] < F[next]) {
                NGF[topIndex] = next;
                stack.pop();
            }
            else break;
        }
    } else {
        stack.push([cur, i]);
    }
}

console.log(NGF.join(' '));