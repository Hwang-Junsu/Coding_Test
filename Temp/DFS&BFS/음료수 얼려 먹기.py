def dfs(x,y) :
    if x<= -1 or x>=n or y<=-1 or y>= m :
        return False
    
    if arr[x][y] == 0 :
        
        arr[x][y] = 1
        dfs(x-1,y)
        dfs(x,y+1)
        dfs(x+1,y)
        dfs(x,y-1)
        return True
    return False

n,m = map(int, input().split())
arr = list()
for i in range(n) :
    arr.append(list(map(int, input())))

cnt = 0
for i in range(n) :
    for j in range(m) :
        
        if dfs(i,j) == True :
            cnt += 1

print(cnt)

# 1. 풀이 - 2차원 리스트를 통해 상하좌우 위치들을 모두 재귀적으로 호출하여 방문 처리를 해야함.
#         - So hard
