// 1000. A+B
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().split(" "); // 풀기용

let a = +input[0];
let b = +input[1];
console.log(a + b);
