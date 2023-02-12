function solution(users, emoticons) {
  const allCase = [];
  const discountRate = [10, 20, 30, 40];
  function dfs(arr) {
    if (arr.length === emoticons.length) {
      allCase.push(arr);
      return;
    }
    for (let i = 0; i < 4; i++) {
      dfs([...arr, discountRate[i]]);
    }
  }
  dfs([]);

  // 자신의 기준에 따라 일정 비율 이상 할인하는 이모티콘 모두 구매
  // 자신의 기준에 따라 이모티콘 구매 비용의 합이 일정 가격 이상이 된다면 이모티콘 구매를 모두 취소, 이모티콘 플러스에 가입.
  const answer = [];

  for (let i = 0; i < allCase.length; i++) {
    const currentCase = allCase[i];
    const result = [0, 0]; // 0번째 index는 가입자, 1번째 index는 판 가격
    for (let j = 0; j < users.length; j++) {
      const [wantDiscount, limitPrice] = users[j];
      let sum = 0;
      for (let k = 0; k < currentCase.length; k++) {
        const discountPrice = emoticons[k] * ((100 - currentCase[k]) / 100);
        if (wantDiscount <= currentCase[k]) {
          sum += discountPrice;
        }
      }
      if (sum >= limitPrice) {
        sum = 0;
        result[0]++;
      } else {
        result[1] += sum;
      }
    }
    answer.push(result);
  }
  answer.sort((a, b) => {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
  });

  return answer[0];
}
