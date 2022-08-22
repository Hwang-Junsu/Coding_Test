from collections import deque
t = int(input())
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
def bfs(x,y) :
    if graph[x][y] == 0 :
        return False

    queue = deque()
    queue.append((x,y))
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4) :
            nx = x +dx[i]
            ny = y +dy[i]
            
            if nx < 0 or nx >= m or ny < 0 or ny >= n :
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx,ny))
    return True
    

for i in range(t) :
    m,n,k = map(int, input().split())
    cnt = 0
    graph = [[0 for a in range(n)] for b in range(m)]
    
    for c in range(k) :
        x,y = map(int, input().split())
        graph[x][y] = 1
    
    for i in range(m) :
        for j in range(n) :
            if bfs(i,j) == True :
                cnt += 1
    
    for i in range(m) :
        for j in range(n) :
            print(graph[i][j], end = " ")
        print()
    print(cnt)
    
# 1. 내 풀이 - 처음에는 재귀형식으로 dfs를 이용하여 풀려고 했으나 recursive error가 발생함.
#            - 1000번이 넘는 재귀를 사용해야해서 오류가 난 것으로 보임.
#            - bfs를 이용하거나 stack을 사용한 dfs를 이용해서 풀어야 할 것 같음.
