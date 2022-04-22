import math

def solution(n, k):
    answer = []
    people = [i+1 for i in range(n)]
    f = [math.factorial(i) for i in range(0, 21)]
    while n > 0 :
        answer.append(people.pop((k-1)// f[n-1]))
        k %= f[n-1]
        n -= 1
        
    return answer
  
  
