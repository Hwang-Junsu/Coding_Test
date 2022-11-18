function solution(n) {
  let str = "";

  while (n >= 1) {
    if (n % 3 === 1) str += "1";
    else if (n % 3 === 2) str += "2";
    else if (n % 3 === 0) {
      str += "4";
      n -= 1;
    }
    n = parseInt(n / 3);
  }
  str = [...str].reverse().join("");
  return str;
}
