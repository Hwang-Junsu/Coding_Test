n = int(input())
dp = [0 for i in range(100001)]

dp[1] = 1
dp[2] = 2
dp[3] = 3

for i in range(4, n+1) :
    if i == int(int(i**0.5)**2) :
        dp[i] = 1
    else :
        dp[i] = dp[i-1] + 1
        j = 1
        while i > j*j :
            dp[i] = min(dp[i], dp[i-j*j] + dp[j*j])
            j += 1
        
print(dp[n])


# http://boj.kr/34ebc7734b4544ff90601705493fb67c
