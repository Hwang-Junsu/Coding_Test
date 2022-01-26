
# define apple == 2
def turn_left() :
    global direction
    direction -= 1
    if direction == -1 :
        direction = 3

def turn_right() :
    global direction
    direction += 1
    if direction == 4 :
        direction = 0

direction = 1
dx = [-1, 0, 1 , 0] # U, R, D, L
dy = [0,  1, 0 , -1]
prev_x = []
prev_y = []
n = int(input())
board = [[0]*n for i in range(n)]
num = int(input())

for i in range(num) :
    apple = list(map(int,input().split()))
    board[apple[0]-1][apple[1]-1] = 2

num2 = int(input())
ans = 0
second = 0
bam = [0,0] # 뱀의 위치
board[bam[0]][bam[1]] = 1
tail = [(bam[0],bam[1])]
coll = False
for i in range(num2) :
    cmd = input().split()
    sec = int(cmd[0])
    dir = cmd[1]
    while True :
        ans += 1
        nx, ny = bam[0]+dx[direction], bam[1]+dy[direction]
        if nx < n and ny < n and nx >= 0 and ny >= 0 and board[nx][ny] != 1:

            if board[nx][ny] == 0 :
                board[nx][ny] = 1
                tail.append((nx,ny))
                px, py = tail.pop(0)
                board[px][py] = 0
                
            if board[nx][ny] == 2 :
                board[nx][ny] = 1
                tail.append((nx,ny))
        
        else :
            coll = True
            break
        
        
        if coll == True :
            break
        bam[0] = nx
        bam[1] = ny
        second += 1
        for i in range(len(board)) :
            for j in range(len(board[i])):
                print(board[i][j], end = " ")
            print()
        print()

        if second == sec :
            break

    if coll == True :
        break
    if dir == "D" :
        turn_right()
    elif dir == "L" :
        turn_left()

print(ans)
