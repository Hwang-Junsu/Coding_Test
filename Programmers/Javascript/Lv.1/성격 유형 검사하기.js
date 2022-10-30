function solution(survey, choices) {
    let answer = "";
    let mbti = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
            mbti[survey[i][0]] += 4 - choices[i];
        } else if (choices[i] > 4) {
            mbti[survey[i][1]] += choices[i] - 4;
        }
    }
    const property = Object.keys(mbti);

    for (let i = 0; i < property.length; i += 2) {
        if (mbti[property[i]] >= mbti[property[i + 1]]) {
            answer += property[i];
        } else {
            answer += property[i + 1];
        }
    }
    return answer;
}
