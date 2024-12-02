const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sliceIndex = input.indexOf("-");

const words = input.slice(0, sliceIndex);
const boards = input.slice(sliceIndex + 1, -1);

function getBoardDict(str) {
  const dict = {};
  const arr = str.split("");
  arr.forEach((el) => {
    dict[el] = !dict[el] ? 1 : dict[el] + 1;
  });

  return dict;
}

function canMakeWord(word, boardDict, target) {
  const dict = {};
  const arr = word.split("");

  arr.forEach((el) => {
    dict[el] = !dict[el] ? 1 : dict[el] + 1;
  });

  let count = 0;

  Object.keys(dict).forEach((el) => {
    if (boardDict[el] >= dict[el]) count++;
  });

  const canMake = count === word.length && dict[target] > 0;

  return canMake;
}

// board의 첫글자부터 순서대로 단어를 만들수있는지 확인한다.

function solution() {
  boards.forEach((board) => {
    const answerDict = {};
    const boardDict = getBoardDict(board);

    for (let i = 0; i < board.length; i++) {
      const target = board[i];
      answerDict[target] = 0;
      for (let j = 0; j < words.length; j++) {
        const word = words[j];

        if (canMakeWord(word, boardDict, target)) {
          answerDict[target] += 1;
        }
      }
    }

    console.log(answerDict);
  });
}

solution();
