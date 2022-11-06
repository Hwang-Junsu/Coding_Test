function solution(food) {
  let answer = "";

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      for (let j = 1; j < food.length; j++) {
        answer += String(j).repeat(parseInt(food[j] / 2));
      }

      answer += "0";
    }
    if (i === 1) {
      for (let j = food.length - 1; j >= 1; j--) {
        answer += String(j).repeat(parseInt(food[j] / 2));
      }
    }
  }
  return answer;
}
