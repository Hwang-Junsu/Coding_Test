def boom(dl,x,y,board) :
    if board[x][y] == "0" : return
    if board[x][y] == board[x+1][y] == board[x][y+1] == board[x+1][y+1] :
        dl.add((x,y))
        dl.add((x+1,y))
        dl.add((x,y+1))
        dl.add((x+1,y+1))

def convert(dl, board) :
    for x, y in dl :
        board[x][y] = "0"
    dl.clear()
        
def move_block(x, y, board) :
    if x-1 < 0 : return 
    if board[x][y] != '0' : return
    
    if board[x][y] == '0' :
        board[x][y] = board[x-1][y]
        board[x-1][y] = '0'
        move_block(x-1,y,board)

def count_zero(board) :
    zero = 0
    for i in range(len(board)) :
        for j in range(len(board[i])) :
            if board[i][j] == '0' :
                zero += 1
    return zero

def check_true(board) :
    for i in range(len(board)) :
        for j in range(len(board[i])) :
            if board[i][j] == True :
                return True
    return False
            
    

def solution(m, n, board):
    
    board = [list(board[i]) for i in range(m)]
    visited = [[False for i in range(n)] for j in range(m)]
    dl = set()
    while True :
        for i in range(m-1) :
            for j in range(n-1) :
                boom(dl,i,j,board)
        
        if len(dl) == 0 : break
        convert(dl, board)
        for i in range(m) :
            for j in range(n) :
                move_block(i,j,board)
    
    return count_zero(board)
  
# bfs를 사용하였더니 시간초과가 났음.. 3방향 확인만 해도되서 굳이 사용할 필요 없음.
# set을 이용하여 좌표중복을 없애고 재귀를 이용하여 move_block함수를 구성하였음.
