function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length) {
    let count = 0;
    for (let i = 0; i < speeds.length; i++) {
      progresses[i] += speeds[i];
    }

    while (true) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
      } else {
        break;
      }
    }
    if (count > 0) answer.push(count);
  }
  return answer;
}
