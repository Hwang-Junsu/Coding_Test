function solution(dots) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < dots.length; j++) {
      for (let k = 0; k < dots.length; k++) {
        for (let l = 0; l < dots.length; l++) {
          if (i === j || i === k || i === l || j === l || j === k || k === l)
            continue;
          const x1 = dots[i][0] - dots[j][0];
          const y1 = dots[i][1] - dots[j][1];

          const x2 = dots[k][0] - dots[l][0];
          const y2 = dots[k][1] - dots[l][1];

          if (y1 / x1 === y2 / x2) {
            return 1;
          }
        }
      }
    }
  }

  return 0;
}

// Brute Force 활용
