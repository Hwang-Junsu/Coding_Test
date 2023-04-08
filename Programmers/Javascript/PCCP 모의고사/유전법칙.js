function solution(queries) {
  const answer = [];
  const gene = ["RR", "Rr", "Rr", "rr"];

  for (let i = 0; i < queries.length; i++) {
    const [n, p] = queries[i];

    if (n === 1) {
      answer.push("Rr");
      continue;
    }
    if (n === 2) {
      answer.push(gene[p - 1]);
      continue;
    }

    let current = n;
    let nth = p;
    const stack = [[current, nth]];

    while (current !== 2) {
      nth = Math.floor((nth - 1) / 4) + 1;
      stack.push([--current, nth]);
    }

    let currentGene = gene[stack.pop()[1] - 1];
    while (stack.length) {
      const [vn, vp] = stack.pop();
      if (currentGene === "RR") {
        currentGene = "RR";
      } else if (currentGene === "rr") {
        currentGene = "rr";
      } else {
        currentGene = gene[Math.floor((vp - 1) % 4)];
      }
    }
    answer.push(currentGene);
  }
  return answer;
}
