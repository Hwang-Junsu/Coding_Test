n = int(input())
graph = list()
cnt = 0
index = 0
apart = []
for i in range(n) :
    graph.append(list(map(int,input())))
    
    
def dfs(x,y) :
    global index
    if x < 0 or x >= n or y < 0 or y >= n :
        return False
    
    if graph[x][y] == 1 :
        graph[x][y] = 0
        index += 1
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    
    return False

for i in range(n) :
    for j in range(n) :
        if dfs(i,j) == True :
            cnt += 1
            apart.append(index)
            index = 0
apart.sort()
print(cnt)
for i in apart :
    print(i)
    
# 1. 내 풀이 - 이전에 풀었던 얼음얼려먹기 문제와 같은 접근법으로 접근하였음.
#            - 얼음얼려먹기 문제와 다른 것은 갯수를 더해야 하는게 추가된 문제
#            - 단지 내 아파트 수를 오름차순으로 정렬해야 했음.
