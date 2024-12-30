const isMac = process.platform === "darwin";
let input = require("fs")
  .readFileSync(isMac ? "input.txt" : "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

function makeDice(arr) {
  const dict = {};
  let char = "A";
  for (let i = 0; i < 6; i++) {
    dict[char] = arr[i];
    char = String.fromCharCode(char.charCodeAt(0) + 1);
  }
  return dict;
}

function sumArray(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

function getMinimumCase(dict) {
  const THREE_COMBINATION = [
    "ABC",
    "ABD",
    "ACE",
    "ADE",
    "FBD",
    "FED",
    "FCB",
    "FCE",
  ];
  const TWO_COMBINATION = [
    "AB",
    "AC",
    "AD",
    "AE",
    "FB",
    "FD",
    "FC",
    "FE",
    "DE",
    "DB",
    "CB",
    "CE",
  ];
  let threePartsMin = Infinity;
  let twoPartsMin = Infinity;
  for (let i = 0; i < THREE_COMBINATION.length; i++) {
    const [x, y, z] = THREE_COMBINATION[i].split("");
    threePartsMin = Math.min(
      threePartsMin,
      sumArray([dict[x], dict[y], dict[z]])
    );
  }
  for (let i = 0; i < TWO_COMBINATION.length; i++) {
    const [x, y] = TWO_COMBINATION[i].split("");
    twoPartsMin = Math.min(twoPartsMin, dict[x] + dict[y]);
  }
  return [threePartsMin, twoPartsMin, Math.min(...Object.values(dict))];
}

function solution(arr) {
  if (n === 1) {
    arr.sort((a, b) => a - b);
    arr.pop();
    return sumArray(arr);
  }

  const dice = makeDice(arr);
  const [threePartsMin, twoPartsMin, onePartMin] = getMinimumCase(dice);

  if (n === 2) {
    return threePartsMin * 4 + twoPartsMin * 4;
  }

  // 3면이 노출되는 경우 , 2면이 노출되는 경우 , 1면이 노출되는 경우를 각각 계산
  const sum =
    threePartsMin * 4 +
    ((n - 2) * 4 + (n - 1) * 4) * twoPartsMin +
    (n ** 2 - (n - 2) * 4 - 4 + (n - 2) * 4 * (n - 1)) * onePartMin;

  return sum;
}

console.log(solution(arr));
