from sys import stdin

def isPrime(number) :
    if number == 1: return False
    if number % 2 == 0 : return False
    for i in range(3, int(number ** 0.5)+1, 2) :
        if number % i == 0 : return False;
    return True

while True :
    n = int(stdin.readline())
    if n == 0 : break
    
    j = n
    for i in range(1, n) :
        j = n-i
        if isPrime(i) and isPrime(j) :
            print("%d = %d + %d" % (i+j, i, j))
            break
    else :
        print("Goldbach's conjecture is wrong.")
    
