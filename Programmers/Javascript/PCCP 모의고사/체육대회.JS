function solution(ability) {
  let answer = 0;
  let max = 0;
  let len = ability[0].length;

  const search = (sum, index, isSelected) => {
    if (len === index) {
      max = Math.max(max, sum);
      return;
    }

    for (let i = 0; i < ability.length; i++) {
      if (isSelected.includes(i)) continue;
      search(sum + ability[i][index], index + 1, [...isSelected, i]);
    }
  };

  search(0, 0, []);

  return max;
}
