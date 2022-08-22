from collections import deque

n = int(input())
matrix = []
visited = [False] * n
for i in range(n) :
    row = list(map(int, input().split()))
    matrix.append(row)
    

def bfs(matrix, start, visited) :
    
    queue = deque()
    queue.append(start)
    while queue :
        v = queue.popleft()
        
        for i in range(n) :
            if matrix[v][i] == 1 and visited[i] == False :
                visited[i] = True
                queue.append(i)

for i in range(n) :
    bfs(matrix, i, visited)
    for j in range(len(visited)) :
        if visited[j] == True :
            print(1, end = " ")
        else :
            print(0, end= " ")
    visited = [False] * n
    print()
