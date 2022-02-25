def solution(brown, yellow):
    size = brown + yellow
    
    div = []
    
    for i in range(1,size+1) :
        if size % i == 0 :
            div.append(i)
    answer = []
    
    min_value = int(1e9)
    for row in div :
        for col in div :
            if row * col == size and (row-2)*(col-2) == yellow :
                answer = [row, col]
                
            
    return answer
