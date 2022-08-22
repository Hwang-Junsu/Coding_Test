def dfs(start, graph) :
    answer = []
    visited = [start]

    while visited :
        top = visited[-1]
        if top not in graph.keys() or len(graph[top]) == 0 :
            answer.append(visited.pop())
        else :
            visited.append(graph[top].pop(0))

    return answer[::-1]


def solution(tickets):
    answer = []
    graph = {}
    visited = [start]
    for ticket in tickets :
        if ticket[0] not in graph.keys() :
            graph[ticket[0]] = []
        graph[ticket[0]].append(ticket[1])
    for x in graph.keys() :
        graph[x].sort()


    return dfs("ICN", graph)

#######################################################################
from collections import defaultdict

def dfs(v, graph, answer, visited) :
    if len(graph[v]) == 0 :
        answer.append(visited.pop())
        if len(visited) == 0 : return
        else : dfs(visited[-1], graph, answer, visited)
        return
    
    visited.append(graph[v].pop(0))
    dfs(visited[-1], graph, answer, visited)
    


def solution(tickets):
    answer = []
    graph = defaultdict(list)
    visited = ["ICN"]
    for k, v in tickets :
        graph[k].append(v)
        
    for x in graph.keys() :
        graph[x].sort()

    dfs("ICN", graph, answer, visited)
    return answer[::-1]
