from collections import deque

dx = [-1, -1, 0, 1, 1, 1, 0, -1]
dy = [0, 1, 1, 1, 0, -1, -1, -1]
n,m = map(int, input().split())
board = []
visited = [[0 for i in range(m)] for j in range(n)]

for i in range(n) :
    row = list(map(int, input().split()))
    board.append(row)

def bfs(start) :
    if board[start[0]][start[1]] == 1 : return 0
    
    safeDistance = 0
    queue = deque()
    visited[start[0]][start[1]] = 1
    queue.append(start)
    danger = False
    while queue :
        v = queue.popleft()
        
        for i in range(8) :
            nx = dx[i] + v[0]
            ny = dy[i] + v[1]
            
            if nx not in range(n) or ny not in range(m) :
                continue
            if nx == start[0] and ny == start[1] :
                continue
            if board[nx][ny] == 1 :
                danger = True
            if visited[nx][ny] == 0 :
                visited[nx][ny] = visited[v[0]][v[1]] + 1
                safeDistance = max(safeDistance, visited[nx][ny])
                queue.append((nx, ny))
            
        if danger : break
    
    return safeDistance - 1
    
answer = 0
for i in range(n) :
    for j in range(m) :
        answer = max(answer, bfs((i,j)))
        visited = [[0 for i in range(m)] for j in range(n)]

print(answer)
