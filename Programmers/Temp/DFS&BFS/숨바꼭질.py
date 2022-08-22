from collections import deque

n,k = map(int, input().split())
rg = max(n,k)
graph = []
visited = [0] * (rg*2+1)
graph.append([1])
for i in range(1,rg*2+1) :
    graph.append([i-1, i+1, i*2])

def bfs() :
    visited[n] = 1
    queue = deque()
    queue.append(n)
    
    while queue :
        v = queue.popleft()
        
        for i in graph[v]:
            if i >= rg*2 : continue
            if visited[i] == 0 :
                visited[i] = visited[v] + 1
                queue.append(i)

bfs()
print(visited[k]-1)

# 1. 내 풀이 - 동생과의 최단거리를 구하는 문제임. 처음에는 동생의 좌표값을 기준으로 하여 배열의 크기와,
#            그래프의 크기를 정했으나, 언니의 좌표가 큰 경우에는 IndexError가 발생하였음.
#            - 동생과 언니 중 최대값으로 기준 좌표를 잡고, 그래프를 작성해준뒤 BFS 알고리즘을 사용함.
