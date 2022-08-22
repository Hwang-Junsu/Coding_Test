n,m,k = map(int,input().split())
arr = list(map(int, input().split()))
ans = 0
arr.sort()
index = -1
while m != 0 :
    if m%k == 0 :
        ans += arr[index-1]
    else :
        ans += arr[index]
    m -= 1
print(ans)


# 1. 내 풀이 - 오름차순으로 정렬 후에 가장 큰 수의 인덱스와 그 다음 수 인덱스만을 이용하여 풀이함.
#            - k번만 사용할 수 있으므로 k로 나눈 나머지가 0일 때만 두 번째수를 더해주었음.

# 2. 개선사항 - 가장 큰 수와 그 다음 큰 수만을 이용하기 때문에 따로 변수를 만들어 해결해주어도 됨.
