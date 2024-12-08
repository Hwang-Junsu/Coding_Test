const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [ml, mr, tl, tr] = input[0].split(" ");

let winner = "?";

if (ml === "R" && mr === "R" && (tl === "P" || tr === "P")) {
  winner = "TK";
}
if (ml === "S" && mr === "S" && (tl === "R" || tr === "R")) {
  winner = "TK";
}
if (ml === "P" && mr === "P" && (tl === "S" || tr === "S")) {
  winner = "TK";
}
if (tl === "R" && tr === "R" && (ml === "P" || mr === "P")) {
  winner = "MS";
}
if (tl === "S" && tr === "S" && (ml === "R" || mr === "R")) {
  winner = "MS";
}
if (tl === "P" && tr === "P" && (ml === "S" || mr === "S")) {
  winner = "MS";
}

console.log(winner);

// 깔끔한 풀이

// const isMac = process.platform === "darwin";
// let input = require("fs")
//   .readFileSync(isMac ? "input.txt" : "/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const [ml, mr, tl, tr] = input[0].split(" ");

// // 승리 조건을 객체로 정의
// const winConditions = {
//   R: "S",  // 바위는 가위를 이김
//   S: "P",  // 가위는 보를 이김
//   P: "R"   // 보는 바위를 이김
// };

// function checkWin(hand1, hand2, opponent1, opponent2) {
//   // 양손이 같은지 확인
//   if (hand1 !== hand2) return false;

//   // 상대방의 양손 중 하나라도 자신이 이길 수 있는 패가 있는지 확인
//   return opponent1 === winConditions[hand1] || opponent2 === winConditions[hand1];
// }

// let winner = "?";

// // MS가 이기는 경우 체크
// if (checkWin(ml, mr, tl, tr)) {
//   winner = "MS";
// }
// // TK가 이기는 경우 체크
// else if (checkWin(tl, tr, ml, mr)) {
//   winner = "TK";
// }

// console.log(winner);
