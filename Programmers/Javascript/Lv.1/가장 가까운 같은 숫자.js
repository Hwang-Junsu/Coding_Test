function solution(s) {
  const location = {};
  const answer = Array.from({ length: s.length }, () => -1);

  for (let i = 0; i < s.length; i++) {
    if (location[s[i]] === undefined) location[s[i]] = i;
    else {
      answer[i] = i - location[s[i]];
      location[s[i]] = i;
    }
  }
  return answer;
}
