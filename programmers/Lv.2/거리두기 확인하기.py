def check(board, x, y) :
    dx = [-1,-1,0,1,1,1,0,-1,-2,0,2,0] # U, UR, R, DR, D, DL, L, UL, UU, RR, DD ,LL
    dy = [0,1,1,1,0,-1,-1,-1,0,2,0,-2]
    for i in range(12) :
        nx = x + dx[i]
        ny = y + dy[i]
        
        if nx < 0 or ny < 0 or nx >= len(board) or ny >= len(board) :
            continue
        if board[nx][ny] == "P" :
            if i == 1 :
                if nx-1 < 0 or ny-1 < 0 :
                    continue
                if board[nx-1][ny] == "X" and board[nx][ny-1] == "X" :
                    continue
            elif i == 3 :
                if nx+1 >= len(board) or ny-1 < 0 :
                    continue
                if board[nx+1][ny] == "X" and board[nx][ny-1] == "X" :
                    continue
            elif i == 5 :
                if ny+1 >= len(board) or nx-1 < 0 :
                    continue
                if board[nx-1][ny] == "X" and board[nx][ny+1] == "X" :
                    continue
            elif i == 7 :
                if nx+1 >= len(board) or ny+1 >= len(board) :
                    continue
                if board[nx+1][ny] == "X" and board[nx][ny+1] == "X" :
                    continue
            elif i == 8 :
                if board[nx+1][ny] == "X" :
                    continue
            elif i == 9 :
                if board[nx][ny-1] == "X" :
                    continue 
            elif i == 10 :
                if board[nx-1][ny] == "X" :
                    continue
            elif i == 11 :
                if board[nx][ny+1] == "X" :
                    continue
            return False
    return True

def solution(places):
    result = []
    
    for place in places :
        
        board = []
        for seat in place :
            board.append(list(seat))
        
        step = False
        for i in range(len(board)) :
            for j in range(len(board[0])) :
                if board[i][j] == "P" :
                    if check(board,i,j) == False :
                        step = True
                        break
        
        if step :
            result.append(0)
        else :
            result.append(1)
    
    return result
