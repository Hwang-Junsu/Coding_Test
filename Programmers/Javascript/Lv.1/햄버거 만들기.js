function solution(ingredient) {
    let answer = 0;
    let stack = [];

    const checkHamburger = (arr) => {
        if (arr.length < 4) return false;
        const burger = arr.slice(-4);

        if (
            burger[0] === 1 &&
            burger[1] === 2 &&
            burger[2] === 3 &&
            burger[3] === 1
        )
            return true;
        return false;
    };

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (checkHamburger(stack)) {
            for (let j = 0; j < 4; j++) {
                stack.pop();
            }
            answer++;
        }
    }

    return answer;
}
