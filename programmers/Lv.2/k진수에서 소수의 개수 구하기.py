# 나의 접근
# 1. 양의 정수 n을 K 진수로 바꾼다 (convert 함수를 만듬)
# 2. isPrime 함수를 만들어 소수판별을 한다.
# 3. k진수로 바뀐 수를 string으로 만들어 왼쪽 첫번째부터 확인한다.
# 3-1. 처음 index부터 0이 나올때까지 index를 옮긴다.
# 3-2. index를 옮기면서 0이 나오면 지나온 index들을 소수 판별 한다.
# 3-3. isPrime = True이면 answer를 더한다.

def convert(number, d) :
    result = ""
    
    while number != 0 :
        result += str(number % d)
        number //= d
    
    result = result[::-1]
    return str(int(result))

def isPrime(number) :
    if number == 1 or number == 0 : return False
    for i in range(2, int(number ** 0.5)+1 ) :
        if number % i == 0 :
            return False
    return True
            
def solution(n, k):
    
    num = convert(n,k)
    answer = 0
    string = ""
    
    for i in range(len(num)) :
        if num[i] != '0' : string += num[i]
        elif num[i] == '0' or i == len(num)-1 :
            if len(string) > 0 and isPrime(int(string)) :
                answer += 1
                string = ""
            else : string = ""
    
    if len(string) > 0 and isPrime(int(string)) :
        answer += 1
        
        
    

    return answer
