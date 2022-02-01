from collections import deque


def bfs(graph,x,y) :
    if graph[x][y] == 0 :
        return False
    if visited[x][y] == True :
        return False
    
    dx = [-1, 0, 1 , 0, -1, 1, 1, -1 ]
    dy = [0, 1, 0, -1, 1, 1, -1, -1]
    
    queue = deque()
    queue.append((x,y))
    visited[x][y] = True
    while queue :
        v = queue.popleft()
        
        for i in range(8) :
            nx = v[0] + dx[i]
            ny = v[1] + dy[i]
            
            if nx < 0 or nx >= h or ny < 0 or ny >= w :
                continue
            if graph[nx][ny] == 0 or visited[nx][ny] == True:
                continue
            
            visited[nx][ny] = True
            queue.append((nx, ny))
    return True


while True :
    w, h = map(int, input().split())
    if w == 0 and h == 0 : break
    graph = []
    visited = [[False] * w for i in range(h)]
    for i in range(h) :
        graph.append(list(map(int, input().split())))

    cnt = 0
    for i in range(h) :
        for j in range(w) :
            if bfs(graph,i,j) == True :
                cnt += 1

    print(cnt)
    
