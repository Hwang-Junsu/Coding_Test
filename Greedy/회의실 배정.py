n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
arr = sorted(arr, key=lambda x: (x[1],x[0]))

end_time = arr[0][1]
cnt = 1
for i in range(1,n) :
    if end_time <= arr[i][0] :
        cnt += 1
        end_time = arr[i][1]

print(cnt)


# 1. 내 풀이 - ...

# 2. 개선사항 - 회의가 끝나는 시간을 오름차순, 회의가 시작하는 시간을 내림차 순으로 두고 끝나는 시간과 시작하는 시간을
#              세어줘야 하는 문제였음.
