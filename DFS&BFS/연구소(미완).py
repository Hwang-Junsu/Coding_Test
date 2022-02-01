from collections import deque
import copy

n,m = map(int, input().split())
graph = []
for i in range(n) :
    row = list(map(int, input().split()))
    graph.append(row)

back_up = copy.deepcopy(graph)

    
visited = [[False] * m for i in range(n)]
virus = []

def find_virus(graph) :
    for i in range(len(graph)):
        for j in range(len(graph[i])) :
            if graph[i][j] == 2 :
                virus.append((i,j))
                
def check(graph) :
    cnt = 0
    for i in range(len(graph)) :
        for j in range(len(graph[i])) :
           if graph[i][j] == 0 :
               cnt += 1
               
    return cnt
def bfs(graph) :
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    
    queue = deque()
    for idx in range(len(virus)) :
        queue.append(virus[idx])
    
    while queue :
        v = queue.popleft()
        
        for i in range(4) :
            nx = v[0] + dx[i]
            ny = v[1] + dy[i]
            
            if nx < 0 or nx >= m or ny < 0 or ny >= n :
                continue
            if graph[nx][ny] == 1 or graph[nx][ny] == 2 :
                continue
            
            graph[nx][ny] = 2
            queue.append((nx,ny))
            
    
find_virus(graph)
ans = 0
for i in range(n) :
    for j in range(m) :
        
        graph[i][j] = 1
        graph[i][j] = 1
        graph[i][j] = 1



for i in range(n) :
    for j in range(m) :
        print(graph[i][j], end = " ")
    print()
