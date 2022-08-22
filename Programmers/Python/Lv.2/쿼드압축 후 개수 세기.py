# 나의 접근 방법
# 1. 압축을 할 수 있는 최소칸은 2x2
# 2. 압축을 한 칸의 표시를 해야할 듯 싶음 (0 -> 2, 1 -> 3) 로 표시
# 3. 가장 큰 사각형부터 압축 가능한지 체크함.

import sys
sys.setrecursionlimit(10**7)

def compress(arr, sr, sc, row, col) :
    start = arr[sc][sr]
    if start == 2 or start == 3 : return False #이미 압축이 완료되었음
    for i in range(sc,col) :
        for j in range(sr,row) :
            if arr[i][j] != start :
                return False
    return True

def solution(arr):
    answer = [0,0]
    com = [0,0]
    row = len(arr[0])
    col = len(arr)

    
    def real_compress(arr, sr, sc, row, col) :
        if sr not in range(0, len(arr[0])) or sc not in range(0, len(arr)) : return
        if row == 1 or col == 1 : return
        if sr >= row or sc >= col : return
        if row%2 == 1 or col%2 == 1 or sc%2 == 1 or sr %2 == 1 : return
        if compress(arr, sr, sc, row, col) :
            if arr[sc][sr] == 1 : answer[1] += 1
            elif arr[sc][sr] == 0 : answer[0] += 1
            for i in range(sc, col) :
                for j in range(sr, row) :
                    if arr[i][j] == 0 : arr[i][j] = 2
                    elif arr[i][j] == 1 : arr[i][j] = 3

        n = (row - sr) // 2
        real_compress(arr, sr, sc, sr + n, sc + n)
        real_compress(arr, sr, sc+n, sr+n, sc+n+n)
        real_compress(arr, sr+n, sc, sr+n+n, sc+n)
        real_compress(arr, sr+n, sc+n, sr+n+n, sc+n+n)
        
        
    real_compress(arr, 0, 0, row, col)
    
    for i in range(len(arr)) :
        for j in range(len(arr[i])):
            if arr[i][j] == 0 :
                answer[0] += 1
            elif arr[i][j] == 1 :
                answer[1] += 1

    
    
    return answer
