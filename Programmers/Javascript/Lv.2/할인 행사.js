function solution(want, number, discount) {
  let answer = 0;
  const wants = {};
  const initWants = () => {
    for (let i = 0; i < want.length; i++) {
      wants[want[i]] = number[i];
    }
  };
  const checkWants = () => {
    if (Object.values(wants).every((value) => value === 0)) return true;
    return false;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    const current = discount[i];

    if (want.includes(current)) {
      initWants();
      for (let j = i; j < i + 10; j++) {
        if (!wants[discount[j]]) continue;
        wants[discount[j]]--;
      }

      if (checkWants()) {
        answer++;
      }
    }
  }
  return answer;
}
