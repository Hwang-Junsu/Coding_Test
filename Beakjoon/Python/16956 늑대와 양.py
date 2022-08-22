c,r = map(int, input().split())
board = [list(input()) for i in range(c)]
danger = False

def make_fence(x,y) :
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    for i in range(4) :
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= c or ny >= r : continue
        if board[nx][ny] == "." :
            board[nx][ny] = "D"

def check(x,y) :
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    for i in range(4) :
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= c or ny >= r : continue
        if board[nx][ny] == "W" :
            return False
    return True
    
    
    
for i in range(c) :
    for j in range(r) :
        if board[i][j] == "W" :
            make_fence(i, j)
        elif board[i][j] == "S" :
            if not check(i, j) :
                danger = True


if danger :
    print(0)
else :
    print(1)
    for i in range(c) :
        for j in range(r) :
            print(board[i][j], end= "")
        print()
