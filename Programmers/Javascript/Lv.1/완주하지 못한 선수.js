function solution(participant, completion) {
    let answer = "";
    const dict = {};
    for (let i = 0; i < participant.length; i++) {
        if (!dict[participant[i]]) dict[participant[i]] = 0;
        dict[participant[i]]++;
    }
    for (let i = 0; i < completion.length; i++) {
        dict[completion[i]]--;
    }
    Object.keys(dict).forEach((el) => {
        if (dict[el] === 1) {
            answer = el;
            return;
        }
    });

    return answer;
}
