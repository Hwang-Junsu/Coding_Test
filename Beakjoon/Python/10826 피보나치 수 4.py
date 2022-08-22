
import sys
limit_number = 15000
sys.setrecursionlimit(limit_number)

n = int(input())

dp = [0 for _ in range(n+1)]

def fibo(num):
    if num==0: return 0
    if num==1: return 1
    
    if dp[num] > 0 :
        return dp[num]
    
    dp[num] = fibo(num-1) + fibo(num-2)
    return dp[num]
    
print(fibo(n))


# dp top-down 방식을 공부하기 위해서 풀어봄.
