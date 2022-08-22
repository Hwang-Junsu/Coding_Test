# 나의 문제풀이 순서 (완전탐색과 DFS를 이용할 것임.)
# 1. wires를 이용하여 그래프를 만든다.
# 1-1. 그래프를 만들 때 wires중 하나씩 빼서 만든다.
# 1-2. 하나씩 빼는 모든 경우 n을 for문을 통해 돌린다.
# 2. 모든 정점에 대하여 DFS를 돌려 SET에 넣으면 숫자가 2개가 나올 것임.
# 2-1. 하나가 나온경우는 두 개의 차이가 같은 것이므로 ANSWER = 0
# 2-2. 두개가 나왔을 때 그 값의 차의 절대값으로 최소값을 갱신함.
# 3. 위 과정을 반복함.

def solution(n, wires):
    answer = 0
    graph = list()
    visited = [0 for i in range(n+1)]
    
    def dfs(v) :
        visited[v] = 1
        for n in graph[v] :
            if visited[n] == 0 :
                dfs(n)
    minvalue = 10000
    for i in range(n-1) : # wires 변수의 갯수를 하나씩 빼볼 거임.
        graph = [[] for i in range(n+1)]
        visited = [0 for i in range(n+1)]
        linked = set()
        
        for j in range(n-1) : # 그래프를 만드는 과정
            if i == j : continue # 하나를 뺌.
            f = wires[j][0]; t = wires[j][1]
            graph[f].append(t); graph[t].append(f)

        for k in range(1,n+1) :
            dfs(k)
            linked.add(sum(visited))
            visited = [0 for i in range(n+1)]
        
        linked = list(linked)
        if len(linked) == 1 : return 0
        minvalue = min(minvalue, abs(linked[0] - linked[1]))
           
        
        
    return minvalue
