const [input, ...arr] = require("fs")
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const [n, l] = input.split(" ").map((el) => +el);
const map = arr.map((el) => el.split(" ").map((el) => +el));

function rowCheck(board, n, l) {
    let count = 0;
    // board를 탐색
    for (let r = 0; r < n; r++) {
        const lamp = Array.from({length: n}, () => false); // 경사로 설치 여부를 저장하는 배열
        let isPossible = true;

        for (let c = 1; c < n; c++) {
            let save = [];
            // 이전 값과 비교하기 위해 1부터 시작.

            if (board[r][c] === board[r][c - 1]) continue; // 이전값과 값이 같다면 평평하다는 것. 통과
            if (board[r][c] === board[r][c - 1] - 1) {
                // 이전 값보다 값이 -1 작다면 현재의 높이가 낮다는 것 경사로 설치 가능여부를 탐색.
                // 현재를 기준으로 앞으로 비교함.
                for (let i = c; i < c + l; i++) {
                    if (i > n - 1 || lamp[i] || board[r][c] !== board[r][i]) {
                        save = [];
                        isPossible = false;
                        break;
                    } else {
                        save.push(i);
                    }
                }
                if (save.length > 0) {
                    save.forEach((index) => (lamp[index] = true));
                    c = save[save.length - 1];
                }
            } else if (board[r][c] === board[r][c - 1] + 1) {
                // 이전 값보다 값이 +1 크다면 현재 높이가 더 크 다는 것 경사로 설치 가능 여부를 탐색하자.
                for (let i = c - 1; i > c - l - 1; i--) {
                    if (i < 0 || lamp[i] || board[r][c - 1] !== board[r][i]) {
                        isPossible = false;
                        break;
                    }
                }
            } else {
                isPossible = false;
                break;
            }
            if (!isPossible) break;
        }
        if (isPossible) {
            count++;
        }
    }

    return count;
}

function colCheck(board, n, l) {
    let count = 0;
    // board를 탐색
    for (let c = 0; c < n; c++) {
        const lamp = Array.from({length: n}, () => false); // 경사로 설치 여부를 저장하는 배열
        let isPossible = true;

        for (let r = 1; r < n; r++) {
            let save = [];
            // 이전 값과 비교하기 위해 1부터 시작.

            if (board[r][c] === board[r - 1][c]) continue; // 이전값과 값이 같다면 평평하다는 것. 통과
            if (board[r][c] === board[r - 1][c] - 1) {
                // 이전 값보다 값이 -1 작다면 현재의 높이가 낮다는 것 경사로 설치 가능여부를 탐색.
                // 현재를 기준으로 앞으로 비교함.
                for (let i = r; i < r + l; i++) {
                    if (i > n - 1 || lamp[i] || board[r][c] !== board[i][c]) {
                        save = [];
                        isPossible = false;
                        break;
                    } else {
                        save.push(i);
                    }
                }
                if (save.length > 0) {
                    save.forEach((index) => (lamp[index] = true));
                    r = save[save.length - 1];
                }
            } else if (board[r][c] === board[r - 1][c] + 1) {
                // 이전 값보다 값이 +1 크다면 현재 높이가 더 크 다는 것 경사로 설치 가능 여부를 탐색하자.
                for (let i = r - 1; i > r - l - 1; i--) {
                    if (i < 0 || lamp[i] || board[r - 1][c] !== board[i][c]) {
                        isPossible = false;
                        break;
                    }
                }
            } else {
                isPossible = false;
                break;
            }
            if (!isPossible) break;
        }
        if (isPossible) {
            count++;
        }
    }

    return count;
}

console.log(rowCheck(map, n, l) + colCheck(map, n, l));
