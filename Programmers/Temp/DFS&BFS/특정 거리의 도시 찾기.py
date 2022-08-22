from collections import deque
import sys

n,m,k,x = map(int, sys.stdin.readline().split())
graph = [[] for i in range(n+1)]
visited = [-1 for i in range(n+1)]
for i in range(m) :
    a,b = map(int, sys.stdin.readline().split())
    graph[a].append(b)

def bfs(graph, start, visited) :
    queue = deque()
    queue.append(start)
    visited[start] = 0
    
    while queue :
        v = queue.popleft()
        
        for i in graph[v] :
            if visited[i] == -1 :
                visited[i] = visited[v] + 1
                queue.append(i)
bfs(graph,x,visited)
city = []
for i in range(len(visited)) :
    if visited[i] == k :
        city.append(i)

if len(city) == 0 :
    print(-1)
else :
    for i in range(len(city)) :
        print(city[i])
        
# 1. 내 풀이 - BFS를 적용하여 시작지점을 0으로 하여 visited 리스트에 거리값을 기입해 주었음
#            - 양방향이 아닌 단방향인 것을 유의 해야함
#            - 목표 거리 값에 해당하는 도시들을 city 리스트에 넣어주고 리스트가 비어있으면 -1을 출력함.
