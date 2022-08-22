n = int(input())


arr = [0 for i in range(301)]
dp = [0 for i in range(301)]

for i in range(1, n+1) :
    arr[i] = int(input())

dp[0] = 0
dp[1] = arr[1]
dp[2] = arr[1] + arr[2]

for i in range(3, n+1) :
    dp[i] = max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2])

print(dp[n])

# http://boj.kr/c02ec863af7c4767b89b1919adf97220
