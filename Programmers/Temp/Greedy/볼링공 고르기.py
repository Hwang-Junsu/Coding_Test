n,m = map(int, input().split())
k = list(map(int,input().split()))

kg = [0]*11


for i in k :
    kg[i] += 1
    
ans = 0
for i in range(1,m+1) :
    n-= kg[i]
    ans += kg[i]*n

print(ans)
