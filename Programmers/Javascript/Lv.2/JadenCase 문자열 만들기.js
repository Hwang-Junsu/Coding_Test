function solution(s) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let str = s
    .toLowerCase()
    .split(" ")
    .map((el) => capitalize(el));

  return str.join(" ");
}
