def solution(files):
    answer = []
    div_str = []
    index = 0
    for file in files :
        index += 1
        head = ""
        number = ""
        tail = ""
        isTail = False
        digit = False
        for char in file :
            if digit == True and not char.isdigit() :
                break
            
            elif not char.isdigit():
                head += char.lower()
            elif char.isdigit() :
                number += char
                digit = True
        
        div_str.append((head, number, index, file))
    
    
    div_str.sort(key = lambda x : (x[0],int(x[1]), x[2]))

    for ds in div_str :
        merge = ds[3]
        answer.append(merge)
        
    return answer
