from collections import deque
n = int(input())
find1, find2 = map(int, input().split())
m = int(input())
graph = [[] for i in range(n+1)]
for i in range(m) :
    x,y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
for i in graph :
    i.sort()
visited = [False] * (n+1)
dist = [0] * (n+1)

def bfs(graph, start, visited) :
    queue = deque([start])
    visited[start] = True
    while queue :
        v = queue.popleft()
        for i in graph[v] :
            if not visited[i] :
                queue.append(i)
                visited[i] = True
                
def distance_bfs(start, end) :
    queue = deque([start])
    dist[start] = 1
    while queue :
        v = queue.popleft()
        for i in graph[v] :
            if dist[i] == 0 :
                dist[i] = dist[v]+1
                if i == end : return dist[v]
                queue.append(i)
                

bfs(graph, find1, visited)
if visited[find1] != visited[find2] :
    print(-1)
else :
    print(distance_bfs(find1, find2))
    
    
# 1. 내 풀이 - BFS를 이용하여 해결함. 기본 BFS와 거리를 측정하기 위한 BFS 함수를 만들면서
#            - BFS를 연습하였음. 함수가 두가지나 필요없지만 연습차원에서 만듬.
