def solution(n, arr1, arr2):
    answer = []
    for i in range(n) :
        answer.append(arr1[i] | arr2[i])
    
    password = []
    for i in range(n) :
        temp = answer[i]
        temp_pass = ''
        while temp != 0 :
            if temp%2 == 1 :
                temp_pass += '#'
            else :
                temp_pass += ' '
            temp = temp//2
        
        while len(temp_pass) != n :
            temp_pass += ' '
        temp_pass = temp_pass[::-1]
        
        
        
        password.append(temp_pass)
    
    return password
