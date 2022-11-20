function solution(distance, scope, times) {
  let answer = 0;

  const man = scope.length;
  const security = Array.from({ length: distance }, () => false);
  const partTime = Array.from({ length: man }, () => 0); // 음수일땐 휴식시간, 양수일땐 근무시간.
  scope.forEach((el) => el.sort((a, b) => a - b));

  const updateSecurity = (time) => {
    // 시간이 맞으면 해당 범위의 security를 활성화.
    for (let i = 0; i < man; i++) {
      // 전체 경비원을 순회한다.
      if (partTime[i] === 1) {
        for (let j = scope[i][0]; j <= scope[i][1]; j++) {
          security[j] = true;
        }
      } else if (partTime[i] === -1) {
        for (let j = scope[i][0]; j <= scope[i][1]; j++) {
          security[j] = false;
        }
      }

      if (partTime[i] < 0) partTime[i] -= 1;
      if (partTime[i] >= 0) partTime[i] += 1;
      if (partTime[i] === times[i][0] + 1) partTime[i] = -1;
      if (-partTime[i] === times[i][1] + 1) partTime[i] = 1;
    }
  };
  for (let i = 0; i < distance; i++) {
    updateSecurity(i);
    if (security[i]) break;
    answer++;
  }

  return answer;
}
