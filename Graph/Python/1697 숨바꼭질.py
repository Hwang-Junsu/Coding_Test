from collections import deque

n, k = map(int, input().split())
graph = [[] for i in range(200001)]
visited = [-1 for i in range(200001)]

for i in range(100001) :
    if i != 0 : graph[i].append(i-1)
    graph[i].append(i+1)
    graph[i].append(i*2)
    
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

bfs(n)
print(visited[k])
