n = int(input())
dp = [0 for i in range(46)]

dp[1] = 1
dp[2] = 1

for i in range(3, n+1) :
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n])



# http://boj.kr/0d739286b82d4316bcbcb1900b842341
