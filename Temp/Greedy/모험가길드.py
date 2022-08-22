n = int(input())
arr = list(map(int, input().split()))
arr.sort()
cnt = 0
print(arr)

while len(arr) != 0 :
    max_value = max(arr)
    for i in range(max_value) :
        arr.pop()
        if len(arr) == 0 : break
    cnt += 1

print(cnt)
