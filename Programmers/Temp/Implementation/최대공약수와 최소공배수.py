def gcd(n,m) :
    if m < n :
        m, n = n, m
    if n == 0:
        return m
    if m % n == 0 :
        return n
    else :
        return gcd(n, m%n)
    
def solution(n, m):
    answer = []
    answer.append(gcd(n,m))
    answer.append(m*n//gcd(n,m))
    return answer
  
  
# gcd함수는 이용.
