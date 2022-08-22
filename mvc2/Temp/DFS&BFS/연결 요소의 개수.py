from collections import deque

n,m = map(int, input().split())
graph = [[] for i in range(n+1)]
visited = [False] * (n+1)
for i in range(m) :
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
for i in graph :
    i.sort()

def bfs(graph, start, visited) :
    if visited[start] == True :
        return False
    
    queue = deque()
    queue.append(start)
    visited[start] = True
    while queue :
        
        v = queue.popleft()
        
        for i in graph[v] :
            if not visited[i] :
                visited[i] = True
                queue.append(i)
    return True
    
bfs(graph,1,visited)
cnt = 0
for k in range(1, len(visited)) :
    if bfs(graph, k, visited) == True :
        cnt += 1
    
print(cnt+1)

# 1. 내 풀이 - BFS를 사용하여, visited 리스트가 True인 경우 False를 반환하여 추가적인 작동을 하지 않게 한다.
#           - 처음 노드에 방문했을 시 cnt를 세어 줌. 일반 python3로 제출 시 시간초과/ pypy로 제출 시 통과.
