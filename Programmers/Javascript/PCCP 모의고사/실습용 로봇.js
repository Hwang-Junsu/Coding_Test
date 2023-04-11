function solution(command) {
  const answer = [0, 0];
  let direction = 0;
  const delta = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < command.length; i++) {
    const cmd = command[i];
    switch (cmd) {
      case "R": {
        direction = (direction + 1) % 4;
        break;
      }
      case "L": {
        direction = direction - 1 < 0 ? 3 : direction - 1;
        break;
      }
      case "G": {
        answer[0] += delta[direction][0];
        answer[1] += delta[direction][1];
        break;
      }
      case "B": {
        answer[0] += delta[(direction + 2) % 4][0];
        answer[1] += delta[(direction + 2) % 4][1];
        break;
      }
    }
  }
  return answer;
}
