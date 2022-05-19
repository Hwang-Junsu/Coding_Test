from sys import stdin

def isPrime(number) :
    if number % 2 == 0 : return False;
    for i in range(3, int(number ** 0.5)+1, 2) :
        if number % i == 0 : return False;
    return True

while True :
    n = int(stdin.readline())
    if n == 0 : break
    if n == 1 : 
        print(1); continue
    count = 0
    for i in range(n+1, (n*2) + 1) :
        if isPrime(i) :
            count += 1
    
    print(count)
    
