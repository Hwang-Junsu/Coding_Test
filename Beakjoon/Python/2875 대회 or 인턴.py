n,m,k = map(int, input().split())
team = 0
while True :
    if n < 2 or m < 1 : break;
    n -= 2; m -= 1; team += 1
res = n+m
while True :
    if res >= k : break;
    res += 3; team -= 1
print(team)
