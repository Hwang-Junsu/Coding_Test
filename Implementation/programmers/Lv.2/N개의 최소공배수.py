def gcd(a,b) :
    if not a%b :
        return b
    return gcd(b, a%b)
    

def solution(arr):
    
    answer = arr[0]
    for num in arr :
        answer = answer * num // gcd(answer, num)
        
    return answer
