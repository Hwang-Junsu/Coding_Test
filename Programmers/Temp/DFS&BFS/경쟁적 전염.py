from collections import deque
import sys

n,k = map(int, input().split())
graph = list()
for i in range(n) :
    row = list(map(int,input().split()))
    graph.append(row)
s,x,y = map(int, input().split())

virus_index = list()

def find_virus(graph) :
    for i in range(n) :
        for j in range(n) :
            if graph[i][j] > 0 :
                virus_index.append((graph[i][j], i, j))
                
find_virus(graph)
virus_index.sort()
def bfs(graph, virus_index, s) :
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    sec = 0
    count = 1
    queue = deque()
    
    for i in range(len(virus_index)) :
        queue.append(virus_index[i])
    
    while queue :
        v = queue.popleft()
        if v[0] > count :
            count += 1
        if count == k and v[0] == 1 :
            sec += 1
            count = 1
            if sec == s :
                break       
            
        
        for i in range(4) :
            nx = v[1] + dx[i]
            ny = v[2] + dy[i]
            
            if nx < 0 or ny < 0 or nx >= n or ny >= n :
                continue
            if graph[nx][ny] == 0 :
                graph[nx][ny] = graph[v[1]][v[2]]
                queue.append((graph[v[1]][v[2]],nx,ny))

if s == 0 :
    print(graph[x-1][y-1])
else :
    bfs(graph, virus_index, s)
    print(graph[x-1][y-1])
 

# 1. 내 풀이 - BFS를 응용해야 했던 문제, 바이러스의 index값들을 해당 바이러스 값 작은 수부터 정렬해 큐에 넣음
#            - 1초가 지나는 조건을 바이러스의 종류가 rotation하고 다시 1번 바이러스가 queue에서 나올 때 1초로 
