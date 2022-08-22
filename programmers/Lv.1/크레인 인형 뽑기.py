def pickup(board, basket, _row) :
    depth = len(board)
    
    for i in range(depth) :
        if board[i][_row] != 0 :
            basket.append(board[i][_row])
            board[i][_row] = 0
            break
            
def getPoint(basket) :
    point = 0
    if len(basket) == 0 or len(basket) == 1:
        return point
    if basket[len(basket)-1] == basket[len(basket)-2] :
        basket.pop()
        basket.pop()
        point += 2
        return point
    
    return point

def solution(board, moves):
    answer = 0
    basket = []
    for row in moves :
        pickup(board, basket, row-1)
        answer += getPoint(basket)
    
    return answer
