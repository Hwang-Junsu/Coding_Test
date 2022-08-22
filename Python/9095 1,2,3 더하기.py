
n = int(input())

dp = [0 for i in range(12)]

dp[0] = 0
dp[1] = 1
dp[2] = 2
dp[3] = 4

for i in range(4, 12) :
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

for i in range(n) :
    print(dp[int(input())])


# http://boj.kr/3f989d671191433c83618b84501a061c
