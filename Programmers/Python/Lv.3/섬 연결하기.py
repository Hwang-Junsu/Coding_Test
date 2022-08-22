# 크루스칼 알고리즘

def find(parent, x) :
    if parent[x] == x : return x
    parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, a, b):
    rootA = find(parent, a)
    rootB = find(parent, b)

    if rootA < rootB:
        parent[rootB] = rootA
    else:
        parent[rootA] = rootB

def solution(n, costs):
    answer = 0
    result = 0
    parent = [i for i in range(n+1)]
    edges = []
    for f, t, c in costs :
        edges.append((c, f, t))
    edges.sort()
    
    for edge in edges:
        cost, a, b = edge
        if find(parent, a) != find(parent, b):
            union(parent, a, b)
            result += cost
    
    
    return result
