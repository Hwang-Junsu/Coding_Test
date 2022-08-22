from collections import deque
t = int(input())
graph = []
visited = []

def bfs(start) :
    if visited[start] == True : return False
    queue = deque()
    queue.append(start)
    visited[start] = True
    
    while queue :
        v = queue.popleft()
        for n in graph[v] :
            if visited[n] == False :
                queue.append(n)
                visited[n] = True
    
    return True

for i in range(t) :
    n = int(input())
    temp = list(map(int, input().split()))
    graph = [[]]
    for i in range(n) :
        graph.append([i+1, temp[i]])
    visited = [False for i in range(n+1)]
    answer = 0
    for i in range(1,n+1) :
        if bfs(i) == True :
            answer += 1
    
    print(answer)
