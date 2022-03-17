from collections import deque

def move(sx, sy, char, board, check) :
    global answer
    size = len(board)
    dir_dict = {"U" : [-1,0], "D" : [1, 0], "R" : [0, 1], "L" : [0, -1]}
    nx = sx + dir_dict[char][0]
    ny = sy + dir_dict[char][1]
    if nx < 0 or ny < 0 or nx >= size or ny >= size :
        return 0
    board[nx][ny] = 1
    check.append((sx,sy,nx,ny))
    check.append((nx,ny,sx,sy))
    
    return [nx, ny]

def solution(dirs):
    global answer
    answer = 0
    
    check = []

    board = [[0 for i in range(11)] for j in range(11)]
    
    direction = deque(dirs)
    sx, sy = 5, 5
    
    while direction :
        direct = direction.popleft()
        ndir = move(sx, sy, direct, board,check)
        if ndir != 0 :
            sx = ndir[0]
            sy = ndir[1]
    check = list(set(check))
    
    return len(check)//2
