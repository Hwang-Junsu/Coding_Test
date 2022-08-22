def equal_check(string) :
    l = 0; r = 0
    for ch in string :
        if ch == "(" : l += 1
        elif ch == ")" : r += 1
    if l == r : return True
    return False

def right_check(string) :
    if len(string) == 0 : return True
    stack = []
    for ch in string :
        if len(stack) == 0 : stack.append(ch)
        elif stack[-1] == "(" and ch == ")" :
            stack.pop()
        else : stack.append(ch)
    if len(stack) == 0 : return True
    return False

def reverse_st(string) :
    temp = ""
    for ch in string :
        if ch == "(" :
            temp += ")"
        elif ch == ")" :
            temp += "("
    return temp


def solution(p):
    answer = ''
    
    
    def convert(string) :
        if len(string) == 0 : return ""
        
        u = ""; v = ""
        for i in range(len(string)) :
            if equal_check(string[:i+1]) :
                u = string[:i+1]
                v = string[i+1:]
                break
        if right_check(u) :
            u += convert(v)
            return u
        else :
            string = "("
            string += convert(v)
            string += ")"
            
            u = list(u); u.pop(); u.pop(0)
            u = "".join(u)
            string += reverse_st(u)
            return string

    answer = convert(p)

    return answer
