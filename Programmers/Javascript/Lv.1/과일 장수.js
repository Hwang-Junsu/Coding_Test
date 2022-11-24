function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);
    const box = score;

    while (box.length >= m) {
        for (let i = 0; i < m; i++) {
            const take = box.pop();
            if (i === m - 1) answer += take * m;
        }
    }

    return answer;
}
