n,m = map(int, input().split())
answer = 0
if n == 1 :
    answer = 1
elif n == 2 :
    answer = min(4, (m-1)//2 + 1)
else :
    answer = m-2 if m > 6 else min(4, m) 

print(answer)
