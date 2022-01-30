n = int(input())
graph = list()
dx = [-1, 0, 1, 0] # U, R, D, L
dy = [0, 1, 0, -1]
for i in range(n) :
    graph.append(list(map(int,input())))

def dfs(x,y) :
    if graph[x][y] == 1 :
        return True
    else :
        for i in range(4) :
            nx = x + dx[i]
            ny = y + dy[i]
            
            if graph[nx][ny] == 1 :
                graph[nx]
    
