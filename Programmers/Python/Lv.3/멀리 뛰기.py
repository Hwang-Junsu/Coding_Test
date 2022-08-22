# Dynamic Programming 
# n = 1 : 1
# n = 2 : 2 (1,1) (2)
# n = 3 : 3 (1,1,1) (1,2) (2,1)
# n = 4 : 5 (1,1,1,1) (1,2,1) (2,1,1) (1,1,2) (2,2) 
# d[n] = d[n-2] + d[n-1] (n-1에 1칸 더 간 경우 + n-2에 2칸을 더간 경우)

def solution(n):
    dp = []
    dp.append(0); dp.append(1); dp.append(2)
    for i in range(3, n+1) :
        dp.append((dp[i-1] + dp[i-2]) % 1234567)
    
    return dp[n]
