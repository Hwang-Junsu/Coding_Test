def isPrime(number) :
    if number == 2: return True
    if number == 1: return False
    if number % 2 == 0 : return False
    for i in range(3, int(number ** 0.5)+1, 2) :
        if number % i == 0 : return False;
    return True
    
    
n = int(input())
for i in range(n) :
    number = int(input())
    a,b = 0, 0
    for j in range(number//2+1, 0, -1) :
        if isPrime(j) and isPrime(number-j) :
            a = j; b = number-j;
            break
    
    if a < b : print(a, b)
    else : print(b, a)
        
