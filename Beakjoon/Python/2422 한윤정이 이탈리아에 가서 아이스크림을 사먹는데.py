from itertools import combinations
from sys import stdin

n,m = map(int, stdin.readline().split())
graph = [[] for _ in range(n+1)]
for i in range(m) :
    f,t = map(int, stdin.readline().split())
    graph[f].append(t); graph[t].append(f)

def dfs(v, w) :
    for to in graph[v] :
        if to == w : return False;
    return True;
    
answer = 0

for c in combinations(range(1,n+1), 3) :
    can = True;
    for i in range(len(c)) :
        for j in range(i+1, len(c)) :
            if not dfs(c[i], c[j]) :
                can = False; break;
        if not can : break;
    if can : answer += 1
    
print(answer)
