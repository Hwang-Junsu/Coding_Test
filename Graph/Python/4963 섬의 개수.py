from collections import deque
board = []
visited = []
w, h = 0, 0
def bfs(start) :
    if board[start[0]][start[1]] == 0 or visited[start[0]][start[1]] == True : return False
    dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    dy = [0, 1, 1, 1, 0 ,-1 ,-1, -1]
    queue = deque()
    queue.append(start)
    visited[start[0]][start[1]] = True
    
    while queue :
        v = queue.popleft()
        
        for i in range(8) :
            nx = dx[i] + v[0]
            ny = dy[i] + v[1]
            
            if nx < 0 or ny < 0 or nx >= h or ny >= w :
                continue
            if board[nx][ny] == 1 and visited[nx][ny] == False :
                queue.append((nx, ny))
                visited[nx][ny] = True
    
    return True
        
while True :
    board = []
    visited = []
    answer = 0
    w, h = map(int, input().split())
    if w == 0 and h == 0 :
        break
    
    for i in range(h) :
        board.append(list(map(int, input().split())))
        visited.append([False] * w)
    
    for i in range(h) :
        for j in range(w) :
            if bfs((i,j)) == True :
                answer += 1
    
    print(answer)
