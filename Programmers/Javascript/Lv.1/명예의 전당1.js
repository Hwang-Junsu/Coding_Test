function solution(k, score) {
    const answer = [];
    const honor = [];
    let mn = 2001;

    for (let i = 0; i < score.length; i++) {
        if (i === 0) {
            honor.push(score[i]);
            mn = Math.min(mn, score[i]);
            answer.push(mn);
            continue;
        }

        if (honor.length < k) {
            honor.push(score[i]);
            mn = Math.min(mn, score[i]);
        } else {
            if (mn < score[i]) {
                mn = honor.sort((a, b) => b - a).pop();
                honor.push(score[i]);
                mn = Math.min(...honor);
            }
        }
        answer.push(mn);
    }

    return answer;
}
