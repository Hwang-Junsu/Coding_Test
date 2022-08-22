n = int(input())
node_num = int(input())
graph = [[] for i in range(n+1)]
for i in range(node_num) :
    node = list(map(int, input().split()))
    graph[node[0]].append(node[1])
    graph[node[1]].append(node[0])

for i in graph :
    i.sort()
visited = [False] * (n+1)
cnt = 0

def dfs(graph, v, visited) :
    visited[v] = True
    
    for i in graph[v] :
        if not visited[i] :
            visited[i] = True
            dfs(graph, i, visited)
dfs(graph,1,visited)
for i in visited :
    if i == True :
        cnt += 1
print(cnt-1)


# 1. 내 풀이 - DFS알고리즘을 이용하여 해결. visited 배열을 만들어 True의 개수마다 cnt를 해줌
#            - 1번은 갯수에서 제외해야 하니 cnt에 -1을 해줌
