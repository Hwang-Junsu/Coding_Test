import sys
sys.setrecursionlimit(10**6)

graph = [[] for i in range(100001)]
visited = [0 for i in range(100001)]
n = int(input())
answer = 0
for i in range(n-1) :
    f,t = map(int, input().split())
    graph[f].append(t)
    graph[t].append(f)
    
def dfs(v) :
    for to in graph[v] :
        if visited[to] == 0 :
            visited[to] = v
            dfs(to)


dfs(1)
for i in range(2, n+1) :
    print(visited[i])
