from collections import deque

graph = [[] for i in range(1001)]
visited = [False for i in range(1001)]
n, m = map(int, input().split())
answer = 0
for i in range(m) :
    f,t = map(int, input().split())
    graph[f].append(t)
    graph[t].append(f)
    
def bfs(start) :
    if visited[start] : return False
    queue = deque()
    visited[start] = True
    queue.append(start)
    while queue :
        v = queue.popleft()
        for to in graph[v] :
            if not visited[to] :
                visited[to] = True
                queue.append(to)
    return True


for i in range(1, n+1) :
    if bfs(i) :
        answer += 1
        
print(answer)
