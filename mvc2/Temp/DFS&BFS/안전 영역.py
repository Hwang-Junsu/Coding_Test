from collections import deque

n = int(input())
graph = []
visited = [[False]*n for i in range(n)]
for i in range(n) :
    row = list(map(int,input().split()))
    graph.append(row)
    

def bfs(graph, sx, sy, visited, hei) :
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    if graph[sx][sy] <= hei :
        return False
    if visited[sx][sy] == True :
        return False
        
    visited[sx][sy] = True
    queue = deque()
    queue.append((sx,sy))
    while queue :
        v = queue.popleft()
        visited[v[0]][v[1]] = True
        for i in range(4) :
            nx = v[0] + dx[i]
            ny = v[1] + dy[i]
                
            if nx < 0 or ny < 0 or nx >= n or ny >= n :
                continue
                
            if visited[nx][ny] == True or graph[nx][ny] <= hei :
                continue
            visited[nx][ny] = True
            queue.append((nx,ny))
    return True


cnt = 0
max_value = 0


for h in range(max(max(graph))) :
    
    for i in range(n) :
        for j in range(n) :
            if bfs(graph,i,j,visited, h) == True :
                cnt += 1
                
                
    visited = [[False]*n for i in range(n)]
    max_value = max(max_value, cnt)
    cnt = 0
    
print(max_value)


# 1. 내 풀이 - BFS를 통해 처음 방문하는 곳 만 셈을 해주어 안전영역의 갯수를 세어 줌
#            - 높이 마다 다른 경우의 수를 모두 체크해 max_value값을 구해줌.
