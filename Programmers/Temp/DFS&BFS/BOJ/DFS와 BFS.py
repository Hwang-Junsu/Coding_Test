from collections import deque
def dfs(graph, start, visited) :
    visited[start] = True;
    print(start, end = ' ')
    for i in graph[start] :
        if not visited[i] :
            dfs(graph, i, visited)

def bfs(graph, start, visited) :
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        print(v, end = ' ')
        for i in graph[v] :
            if not visited[i] :
                queue.append(i)
                visited[i] = True

n,m,v = map(int, input().split())
graph = [[] for i in range(n+1)]
visited = [False]*(n+1)
for i in range(m) :
    node = list(map(int, input().split()))
    graph[node[0]].append(node[1])
    graph[node[1]].append(node[0])

for i in range(len(graph)) :
    graph[i].sort()


dfs(graph, v, visited)
visited = [False]*(n+1)
print()
bfs(graph, v, visited)

# 1. 내 풀이 - DFS와 BFS의 가장 기본적인 알고리즘을 구현하는 문제임.
#            - 제공된 간선과 정점을 그래프에 넣는 과정이 필요하고 넣은 뒤에는 정렬을 해주어야 함
#            - DFS를 먼저 해준 뒤 BFS 작업도 다시 해주어야 하기에 visited 리스트를 초기화 해줌.

# 2. 개선 사항 - DFS와 BFS의 가장 기본적인 알고리즘 구현이 처음이기에 코드를 혼자서 쳐보려고 했으나 조금 어려워 참고를 많이했음...
#              - 지속적인 훈련이 필요할 듯 보임.
