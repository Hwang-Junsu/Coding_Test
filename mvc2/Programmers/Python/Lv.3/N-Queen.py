# 나의 접근 방법
# 자료 구조 -> 2차원 리스트 //  알고리즘 -> 완전 탐색(Brute Force) -> 시간초과

# 좌표 경우의 수를 모두 구함
# 좌표 경우의 수 모두에서 n개를 뽑는 경우를 구함 // 144C12 == 너무 큼 -> 시간초과

# dfs, 백트레킹 기법 사용 (가지치기)

def check(queen, row) :
    for i in range(row) :
        # 중복 체크와, 대각선 값 체크
        if queen[row] == queen[i] or abs(queen[i] - queen[row]) == row - i :
            return False
    return True

def dfs(queen, row) :
    n = len(queen)
    count = 0
    
    if row == n : return 1
    for col in range(n) :
        queen[row] = col
        if check(queen, row) :
            count += dfs(queen, row+1)
    
    return count

def solution(n):
    answer = [0] * n
    
    return dfs(answer, 0)
