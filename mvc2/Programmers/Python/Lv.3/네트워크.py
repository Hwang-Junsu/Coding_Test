from collections import deque


def bfs(start, visited, graph) :
    if visited[start] : return False
    
    visited[start] = True
    q = deque()
    q.append(start)
    
    while q :
        v = q.popleft()
        for x in graph[v] :
            if not visited[x] :
                q.append(x)
                visited[x] = True
    return True

def solution(n, computers):
    answer = 0
    visited = [False for _ in range(n)]
    graph = [[] for i in range(n)]
    
    for i in range(len(computers)) :
        
        for j in range(len(computers[i])) :
            
            if i != j and computers[i][j] == 1 :
                graph[i].append(j)
        
    for i in range(n) :
        if bfs(i, visited, graph) :
            answer += 1
    
    return answer
