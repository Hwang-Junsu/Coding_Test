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

def find_virus(back_up) :
    for i in range(len(back_up)):
        for j in range(len(back_up[i])) :
            if back_up[i][j] == 2 :
                virus.append((i,j))
                
def check(back_up) :
    cnt = 0
    for i in range(len(back_up)) :
        for j in range(len(back_up[i])) :
           if back_up[i][j] == 0 :
               cnt += 1
               
    return cnt
def bfs(back_up) :
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
            
            if nx < 0 or nx >= n or ny < 0 or ny >= m :
                continue
            if back_up[nx][ny] == 1 or back_up[nx][ny] == 2 :
                continue
            
            back_up[nx][ny] = 2
            queue.append((nx,ny))
            
def solution(back_up) :
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
                # 벽을 세개 세운다
                back_up[v[0]][v[1]] = 1
                back_up[index[i][0]][index[i][1]] = 1
                back_up[index[j][0]][index[j][1]] = 1
           
                # bfs를 이용한 시뮬레이션을 한다.
                bfs(back_up)
                # 안전지대의 최소값을 구해준다.
                max_value = max(check(back_up), max_value)
                # 그래프를 원래 상태로 돌려 놓는다.
                back_up = copy.deepcopy(graph)
                
        v = index.popleft()
    
    return max_value
        
find_virus(back_up)
print(solution(back_up))


# 1. 내 풀이 - 원본 배열을 보존하며 BFS 시뮬레이션을 돌리고 다시 백업해주는 방식으로 해결 하였음.
#            - 세개의 벽을 세울 모든 경우의 수를 BFS 한 뒤 최대 거리를 저장해 주었음.
