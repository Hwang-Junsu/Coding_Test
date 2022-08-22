from collections import deque

def bfs(distance, graph, start) :
    
    distance[start] = 0
    q = deque()
    q.append(start)
    while q : 
        v = q.popleft()
        for x in graph[v] :
            if distance[x] == -1 :
                distance[x] = distance[v] + 1
                q.append(x)

def solution(n, edge):
    answer = 0
    
    graph = [[] for _ in range(n+1)]
    distance = [-1 for _ in range(n+1)]
    for f, t in edge :
        graph[f].append(t)
        graph[t].append(f)
    
    bfs(distance, graph, 1)
    
    farthest = max(distance)
    answer = distance.count(farthest)
    return answer
