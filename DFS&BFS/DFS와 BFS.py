def dfs(graph, start) :
    pass

def bfs(graph, start) :
    pass

n,m,v = map(int, input().split())
graph = [[] for i in range(n)]
visited = [False]*n
for i in range(m) :
    node = list(map(int, input().split()))
    graph[node[0]].append(node[1])
    

    
print(graph)
