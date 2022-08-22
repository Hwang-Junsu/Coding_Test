n = int(input())

dp = [0 for i in range(1001)]

dp[0] = 0
dp[1] = 1
dp[2] = 3
dp[3] = 5

for i in range(4, n+1) :
    dp[i] = (dp[i-1] + 2*dp[i-2])%10007

print(dp[n])


# http://boj.kr/2ec2014e0c2d4f5dbcbec66538bf1b74
