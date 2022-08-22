def solution(m, n, puddles):
    answer = 0
    board = [[0 for _ in range(m)] for _ in range(n)]
    for px, py in puddles :
        board[py-1][px-1] = -1
    
    if board[0][1] == -1 and board[1][0] == -1 :
        return 0
    
    board[0][0] = 1
    
    for i in range(len(board)) :
        for j in range(len(board[i])) :
            if i == 0 and j == 0 : continue
            if board[i][j] == -1 : continue
            
            if i-1 < 0 or board[i-1][j] == -1 :
                board[i][j] = board[i][j-1]%1000000007
                if board[i][j] == 1000000006 :
                    board[i][j] = -1
            elif j-1 < 0 or board[i][j-1] == -1 :
                board[i][j] = board[i-1][j]%1000000007
                if board[i][j] == 1000000006 :
                    board[i][j] = -1
            else :
                board[i][j] = (board[i][j-1] + board[i-1][j])%1000000007
    
    
    answer = board[n-1][m-1]
    
    for i in range(len(board)) :
        for j in range(len(board[i])) :
            print(board[i][j], end = " ")
        print()
    
    if board[n-2][m-1] == -1 and board[n-1][m-2] == - 1 :
        return 0
    return answer
