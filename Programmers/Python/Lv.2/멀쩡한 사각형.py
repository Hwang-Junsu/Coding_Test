def gcd(a,b) :
    if b == 0:
        return a
    if a%b == 0:
        return b
    else :
        return gcd(b, a%b)

def solution(w,h):
    answer = 1
    if w > h :
        w, h = h, w
    
    answer = w*h - (w+h-gcd(w,h))
    
    return answer
