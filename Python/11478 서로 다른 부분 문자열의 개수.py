from itertools import combinations

s = input(); d = dict()


for i in range(len(s)) :
    for j in range(i+1,len(s)+1) :
        d[s[i:j]] = 0

print(len(d.keys()))
