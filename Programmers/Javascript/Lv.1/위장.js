function solution(clothes) {
    let answer = 1;
    let dict = {};
    for (let i = 0; i < clothes.length; i++) {
        dict[clothes[i][1]] = [];
    }
    for (let i = 0; i < clothes.length; i++) {
        const [cloth, type] = clothes[i];
        dict[type].push(cloth);
    }
    const arr = Object.values(dict);
    for (let i = 0; i < arr.length; i++) {
        answer *= arr[i].length + 1;
    }

    return answer - 1;
}
