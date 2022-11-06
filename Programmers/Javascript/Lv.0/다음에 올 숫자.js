function solution(common) {
  let save = common[1] - common[0];
  let isGeometric = false;

  for (let i = 2; i < common.length; i++) {
    let difference = common[i] - common[i - 1];
    if (save !== difference) {
      isGeometric = true;
      break;
    }
  }

  if (isGeometric) {
    return common[common.length - 1] * (common[1] / common[0]);
  } else {
    return common[common.length - 1] + save;
  }
}
