def solution(s):
    answer = True
    pc = 0
    yc = 0
    for char in s :
        
        if char == 'p' or char == 'P' :
            pc += 1
        elif char == 'y' or char == 'Y' :
            yc += 1
            
    if pc == yc :
        return True
    else :
        return False
