# 그래프 문제.
# 가중치를 옮기는데의 최소 값
# dfs를 통해 가장 밑 더 이상 깊이 갈 수 없을 때까지 들어감.
# 정점에 더이상 방문할 곳이 없는 경우. 부모 노드에게 가중치를 전달함

import sys
from collections import deque

sys.setrecursionlimit(10**6)

def dfs(a, graph, visited, start, prev) :
    global answer
    visited[start] = True
    for x in graph[start] :
        if not visited[x] :
            dfs(a, graph, visited, x, start)

    a[prev] += a[start]
    answer += abs(a[start])
    a[start] = 0

def solution(a, edges):
    global answer
    answer = 0
    length = len(a)
    if sum(a) != 0 :
        return -1    
    graph = [[] for _ in range(length)]
    visited = [False for _ in range(length)]
    for f, t in edges :
        graph[f].append(t)
        graph[t].append(f)
            
            
    dfs(a, graph, visited, 0, 0)
    
    return answer
