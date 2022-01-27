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
second_list = []
dir_list = []
for i in range(num2) :
    cmd = input().split()
    second_list.append(int(cmd[0]))
    dir_list.append(cmd[1])
second_list.append(0)

index = 0
while True :
    second += 1
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
        break;
    bam[0] = nx
    bam[1] = ny
    
    if second == second_list[index] :
        if dir_list[index] == "D" :
            turn_right()
        elif dir_list[index] == "L" :
            turn_left()
        index += 1
        
print(second)

# 1. 나의 풀이 - 왼쪽과 오른쪽으로 도는 함수를 만들어 놓았음. 뱀의 위치와 꼬리 위치까지 저장해놓고, 다음 ny, nx 값이 범위를 벗어나거나 몸통이 아닐 경우에는
#             - 몸통으로 채우고 이전 값을 지웠음. 사과일 경우에는 꼬리를 저장해줌.
#             - 저장해둔 커맨드 리스트의 index를 점점 늘려가면서 게임을 진행하고, 끝나는 경우의 second를 반환해줌.
