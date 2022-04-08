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
