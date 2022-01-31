from collections import deque

def bfs(x,y) :
    dx = [-2, -2, -1, 1, 2, 2, -1, 1] # UR, UL, RU, RD, DR, DL, LU, LD
    dy = [1, -1, 2, 2, 1, -1, -2, -2] # UR, UL, RU, RD, DR, DL, LU, LD
    visited[x][y] += 1
    queue = deque()
    queue.append((x,y))
    
    while queue :
        
        v = queue.popleft()
        for i in range(8) :
            nx = v[0]+dx[i]
            ny = v[1]+dy[i]
            
            if nx < 0 or nx >= size or ny < 0 or ny >= size :
                continue
            if visited[nx][ny] > -1 :
                continue
            
            visited[nx][ny] = visited[v[0]][v[1]] + 1
            queue.append((nx,ny))


t = int(input())

for i in range(t) :
    size = int(input())
    visited = [[-1]*size for j in range(size)]
    x,y = map(int, input().split())
    tx, ty = map(int, input().split())
    bfs(x,y)
    
    print(visited[tx][ty])
    
    
# 1. 내 풀이 - BFS를 이용하여 칸 마다 나이트가 이동하는 칸의 최소값을 visited리스트에 적용함.
#            - 알고리즘만 사용할 줄 알면 비교적 쉬운 문제였음.
    
