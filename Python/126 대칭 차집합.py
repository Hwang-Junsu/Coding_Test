from collections import defaultdict

a,b = map(int, input().split())
d = defaultdict(int)

ar = list(map(int, input().split()))
br = list(map(int, input().split()))

for n in ar :
    d[n] += 1
for n in br :
    d[n] += 1
answer = 0
for k,v in d.items() :
    if v == 1 :
        answer+=1

print(answer)
