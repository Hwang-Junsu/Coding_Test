def turn_left() :
    global direction
    direction -= 1
    
    if direction == -1 :
        direction = 3

# 가보지 않은 육지칸 0, 바다 칸 1
n,m = map(int, input().split())
x,y,direction = map(int,input().split())
dx = [-1, 0, 1, 0]   # U , R , D , L
dy = [0 , 1, 0 , -1]
info_map = [[0]*8 for i in range(8)] # 방문 위치 정보 저장맵
map = [list(map(int, input().split())) for i in range(n)]
turn_time = 0 
info_map[x][y] = 1
ans = 1
# 어짜피 외곽이 바다라 range overflow가 날 일은 없음.
# 네 방향 탐색 먼저 하자

while True :
    
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]
    
    if map[nx][ny] == 0 and info_map[nx][ny] == 0:
        info_map[nx][ny] = 1
        x = nx
        y = ny
        ans += 1
        turn_time = 0
        continue
    
    else :
        turn_time += 1
    
    
    if turn_time == 4 :
        nx = x-dx[direction]
        ny = y-dy[direction]
        if info_map[nx][ny] == 0 :
            x = nx
            y = ny
        else :
            break
        turn_time = 0
    
print(ans)
