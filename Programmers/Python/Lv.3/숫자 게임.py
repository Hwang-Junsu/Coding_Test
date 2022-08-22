# 구현?
# 순서에 상관없이 A의 값들보다 큰 B의 값을 세어준다.

def solution(A, B):
    answer = -1
    
    A.sort(reverse = True)
    B.sort(reverse = True)
    count = 0
    for b in B :
        for a in A :
            if b > a :
                A.remove(a)
                count += 1
                break
        else :
            break
    

    answer = count
    return answer
