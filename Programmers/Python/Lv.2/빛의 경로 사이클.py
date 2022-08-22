def solution(grid):
    answer = []
    # 빛의 현재 정보
    light = [0,0,0]
    direction = [[1,0], [0,-1], [-1,0], [0,1]]
    visited = [[[False for i in range(4)] for j in range(len(grid[0]))] for k in range(len(grid))]
    
    
    def move(light) :
        nx, ny, nd = light[0], light[1], light[2]
        nx = (light[0] + direction[nd][0]) % len(grid) 
        ny = (light[1] + direction[nd][1]) % len(grid[0])        
        if grid[nx][ny] == 'R' :
            nd = (nd-1) % 4
        elif grid[nx][ny] == 'L' :
            nd = (nd+1) % 4
            
        return [nx, ny, nd]

    
    for sx in range(len(grid)) :
        for sy in range(len(grid[sx])) :
            for i in range(4) :
                if visited[sx][sy][i] : continue
                count = 0
                light = [sx, sy, i]
                while True :
                    light = move(light)
                    if visited[light[0]][light[1]][light[2]] : break
                    visited[light[0]][light[1]][light[2]] = True
                    count += 1
                answer.append(count)
                
    answer.sort()
    return answer
  
# 3차원 리스트를 이용함. 마지막 오름차순 정렬 필수.
