function solution(k, tangerine) {
  let answer = 0;
  const count = [];

  let currentCount = 0;
  let current = 1;
  tangerine.sort((a, b) => a - b);
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i] !== current) {
      count.push({ current: current, count: currentCount });
      currentCount = 1;
      current = tangerine[i];
    } else {
      currentCount++;
    }
    if (i === tangerine.length - 1) {
      if (current > 0) {
        count.push({ current: current, count: currentCount });
      }
    }
  }

  count.sort((a, b) => b.count - a.count);
  for (let i = 0; i < count.length; i++) {
    if (k <= 0) break;
    k -= count[i].count;
    answer++;
  }

  return answer;
}
