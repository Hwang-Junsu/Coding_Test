from collections import deque
import sys

m,n = map(int, input().split())

box = list()
visited = [[False for j in range(m)] for i in range(n)]
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
tomato = []
for i in range(n) :
    box.append(list(map(int, sys.stdin.readline().split(' '))))

def bfs() :
    queue = deque()
    for i in range(len(tomato)) :
        queue.append((tomato[i]))
    while queue :
        x,y = queue.popleft()        
        visited[x][y] = True
        for i in range(4) :
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m :
                continue
            if visited[nx][ny] == True :
                continue    
            if box[nx][ny] == -1 :
                continue
            if box[nx][ny] == 0 :
                box[nx][ny] = box[x][y] + 1
                visited[nx][ny] = True
                queue.append((nx,ny))

def check(arr) :
    result = 0
    for i in range(len(arr)) :
        for j in range(len(arr[i])) :
            if arr[i][j] == 0 :
                return -1
            result = max(result, arr[i][j])
            
    return result-1
    
# 토마토찾기
for i in range(n) :
    for j in range(m) :
        if box[i][j] == 1 :
            tomato.append((i,j))
bfs()

print(check(box))

# 1. 내 풀이 - BFS를 이용하여 해결해야하는 문제. 시간초과가 많이 나서 해결하는데 오래걸렸음..
#            - 반복문을 이용해서 각 BOX의 인덱스마다 BFS를 적용해주는 것은, 
#               한개의 토마토가 있을 때는 문제가 없었는데 토마토가 여러개면 시간초과가 생기고 제대로된 값이 나오지 않음
#            - 토마토가 있는 위치를 시작점으로 잡고 그 지점에 해당되는 BFS 함수를 적용해주면 값이 제대로 나옴.
