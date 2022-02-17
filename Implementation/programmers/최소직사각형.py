def solution(sizes):
    min_value = 0
    max_value = 0
    for size in sizes :
        size.sort()
        min_value = max(size[0],min_value)
        max_value = max(size[1],max_value)
    
    print(sizes)
    answer = min_value*max_value
    return answer
  
  
  # 1. 내 풀이 - 어렵지 않은데 왜이리 오래걸리는 것인가..
