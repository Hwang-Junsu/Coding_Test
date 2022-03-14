import sys

n = int(sys.stdin.readline())
dp = [0 for i in range(91)]

dp[0] = 0
dp[1] = 1
dp[2] = 1

for i in range(3, n+1) :
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n])



# http://boj.kr/43a502474ca140418c3bbdec54a63868
