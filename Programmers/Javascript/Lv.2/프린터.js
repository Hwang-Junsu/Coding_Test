function solution(priorities, location) {
  let answer = 0;
  const printer = Array.from({ length: priorities.length }, (_, idx) => [
    priorities[idx],
    idx,
  ]);
  priorities.sort((a, b) => a - b);

  while (printer.length) {
    if (printer[0][0] === priorities[priorities.length - 1]) {
      const print = printer.shift();
      priorities.pop();
      answer++;
      if (print[1] === location) break;
    } else printer.push(printer.shift());
  }
  return answer;
}
