# Dynamic Programming
# 2 * n -> 2 * (n-1)에서 세로타일을 하나 붙이는 경우 d[n-1]
# 2 * (n-2) 에서 가로타일 두개를 붙이는 경우 d[n-2]
# 점화식 -> d[n] = d[n-1] + d[n-2]

def solution(n):
    answer = 0
    dp = []
    dp.append(1)
    dp.append(2)
    
    for i in range(2, n+1) :
        dp.append((dp[i-1] + dp[i-2])%1000000007) 
    answer = dp[n-1]
    
    return answer
