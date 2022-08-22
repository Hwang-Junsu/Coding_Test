              
def solution(board):
            
    if len(board[0]) < 2 or len(board) < 2 :
        return 1
    max_value = 0
    for x in range(1,len(board)) :
        for y in range(1,len(board[0])) :
            if board[x][y] == 1 :
                board[x][y] = min(board[x-1][y-1], board[x-1][y], board[x][y-1]) + 1
            max_value = max(max_value, board[x][y])

    return max_value ** 2
