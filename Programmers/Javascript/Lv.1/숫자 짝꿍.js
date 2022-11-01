function solution(X, Y) {
    let answer = "";

    const x = {};
    const y = {};
    for (let i = 0; i < 10; i++) {
        x[i] = 0;
        y[i] = 0;
    }

    for (let i = 0; i < X.length; i++) {
        x[X[i]]++;
    }
    for (let i = 0; i < Y.length; i++) {
        y[Y[i]]++;
    }
    for (let i = 0; i < 10; i++) {
        if (x[String(i)] > 0 && y[String(i)] > 0) {
            for (let j = 0; j < Math.min(x[String(i)], y[String(i)]); j++) {
                answer += i;
            }
        }
    }

    answer = [...answer].sort((a, b) => b - a).join("");
    if (answer[0] === "0") {
        return "0";
    }

    return !answer ? "-1" : answer;
}
