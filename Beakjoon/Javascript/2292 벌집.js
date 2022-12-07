const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let answer = 0;
let bee = n;
let count = 1;
while (bee > 1) {
  bee -= count * 6;
  answer++;
  count++;
}

console.log(answer + 1);
