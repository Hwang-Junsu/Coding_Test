from collections import deque

n,m,v= map(int , input().split())

visited = [False for i in range(n+1)]
graph = [[] for i in range(n+1)]
for i in range(m) :
    st, ed = map(int, input().split())
    graph[st].append(ed)
    graph[ed].append(st)
for info in graph :
    info.sort()
    
def dfs(start) :
    stack = []
    stack.append(start)
    visited[start] = True
    print(start, end = " ")
    
    while stack :
        v = stack[-1]
        cantmove = True
        for t in graph[v] :
            if visited[t] == False :
                stack.append(t)
                visited[t] = True
                print(t, end = " ")
                cantmove = False
                break
        
        if cantmove :
            stack.pop()

def bfs(start) :
    queue = deque()
    queue.append(start)
    visited[start] = True
    print(start, end = " ")
    
    while queue :
        v = queue.popleft()
        for t in graph[v] :
            if visited[t] == False :
                queue.append(t)
                visited[t] = True
                print(t, end = " ")

dfs(v)
print()
visited = [False for i in range(n+1)]
bfs(v)
