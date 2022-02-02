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
            
def solution(graph) :
    index = deque()
    for i in range(n) :
        for j in range(m) :
            index.append((i,j))
            
    max_value = 0
    
    v = index.popleft()

    while index :
        for i in range(len(index)) :
            for j in range(i+1, len(index)) :
                # 임의의 벽을 세울 자리에 이미 벽이 있거나 바이러스 자리일 경우 continue
                if graph[v[0]][v[1]] == 1 or graph[v[0]][v[1]] == 2 or graph[index[j][0]][index[j][1]] == 1 or graph[index[i][0]][index[i][1]] == 1 or graph[index[j][0]][index[j][1]] == 2 or graph[index[i][0]][index[i][1]] == 2 :
                    continue
                print(v, index[i],index[j])
                
                # 벽을 세개 세운다
                graph[v[0]][v[1]] = 1
                graph[index[i][0]][index[i][1]] = 1
                graph[index[j][0]][index[j][1]] = 1
                
                for row in range(m) :
                    for col in range(n) :
                        print(graph[row][col] , end = " ")
                    print()
                
                print()                
                
                # bfs를 이용한 시뮬레이션을 한다.
                bfs(graph)
                # 안전지대의 최소값을 구해준다.
                max_value = max(check(graph), max_value)
                # 그래프를 원래 상태로 돌려 놓는다.
                graph = back_up
                
        v = index.popleft()
    
    return max_value
        
find_virus(graph)
print(solution(graph))

print(graph)
print(graph)
