function solution(storey) {
  let answer = 0;
  const apt = [...String(storey)].map((el) => +el).reverse();

  for (let i = 0; i < apt.length; i++) {
    if (apt[i] === 5) {
      if (i + 1 < apt.length) {
        if (apt[i + 1] < 5) {
          answer += apt[i];
        } else {
          answer += apt[i];
          apt[i + 1] += 1;
        }
      } else {
        answer += apt[i];
      }
    } else if (apt[i] < 5) {
      answer += apt[i];
    } else {
      if (i + 1 < apt.length) {
        apt[i + 1] += 1;
      } else {
        apt.push(1);
      }
      answer += 10 - apt[i];
    }
  }
  return answer;
}
