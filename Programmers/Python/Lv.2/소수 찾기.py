import itertools

def isPrime(number) :
    if number == 1 or number == 0 :
        return False
    
    for i in range(2, number//2 +1 ) :
        if number % i == 0 :
            return False
    return True

def solution(numbers):
    answer = 0
    lst = []
    for i in range(1, len(numbers)+1) :
        lst += itertools.permutations(numbers, i)
    lst = list(set(lst))
    
    check = []
    for value in lst :
        string = ""
        for number in value :
            string += number
        check.append(int(string))
        
    check = list(set(check))
    
    for num in check :
        if isPrime(num) == True :
            answer += 1
    
    
    return answer
