function solution(cards) {
  const visited = Array.from({ length: 101 }, () => false);
  const arr = [];

  for (let i = 0; i < cards.length; i++) {
    if (visited[cards[i]]) continue;
    let card = cards[i];
    let count = 0;

    while (!visited[card]) {
      visited[card] = true;
      card = cards[card - 1];
      count++;
    }
    arr.push(count);
  }
  if (arr.length < 2) return 0; // 짝지가 없는 경우
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1];
}
