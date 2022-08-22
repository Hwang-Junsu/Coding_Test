from collections import deque

answer = []
n,m = map(int, input().split())
graph = [[] for i in range(n+1)]
visited = [-1 for i in range(n+1)]

for i in range(m) :
    f,t = map(int, input().split())
    graph[f].append(t)
    graph[t].append(f)
    
def bfs(start) :
    queue = deque()
    queue.append(start)
    visited[start] = 0
    while queue :
        v = queue.popleft()
        for to in graph[v] :
            if visited[to] == -1 :
                visited[to] = visited[v] + 1
                queue.append(to)

for i in range(1, n+1) :
    bfs(i)
    answer.append(sum(visited[1:n+1]))
    visited = [-1 for i in range(n+1)]

print(answer.index(min(answer))+1)
