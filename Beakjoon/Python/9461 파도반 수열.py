n = int(input())

dp = [0 for i in range(101)]

dp[0] = 0
dp[1] = 1
dp[2] = 1
dp[3] = 1
dp[4] = 2
dp[5] = 2

for i in range(6, 101) :
    dp[i] = dp[i-1] + dp[i-5]

for i in range(n) :
    print(dp[int(input())])
    
# http://boj.kr/b3ced302cd55428c989d12504ce3c463
