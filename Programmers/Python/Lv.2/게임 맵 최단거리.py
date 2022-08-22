from collections import deque

def bfs(maps, visited, x, y) :
    n = len(maps)
    m = len(maps[0])
    dx = [-1, 0, 1, 0]
    dy = [0 , 1, 0, -1]
    visited[x][y] = 1
    queue = deque()
    
    queue.append((x,y))
    
    while queue :
        
        index = queue.popleft()
        
        for i in range(4) :
            nx = index[0] + dx[i]
            ny = index[1] + dy[i]

            if nx >= n or ny >= m or nx < 0 or ny < 0 :
                continue

            if  visited[nx][ny] == 0 and maps[nx][ny] == 1 :
                visited[nx][ny] = visited[index[0]][index[1]] +1
                queue.append((nx, ny))
    
    
def solution(maps):
    answer = 0
    n = len(maps) - 1
    m = len(maps[0]) - 1
    visited = [[0 for _ in range(len(maps[0]))] for _ in range(len(maps))]
    
    bfs(maps, visited, 0, 0)
    
    if visited[n][m] == 0 :
        answer = -1
    else :
        answer = visited[n][m]
    
    
    return answer
