import heapq

# 수를 제곱하므로, 야근지수를 최대한으로 낮추기 위해서는 배열안의 최대 값을 최대한 작게 만들어 주어야 함.

def solution(n, works):
    answer = 0
    heap = [(-time, time) for time in works]
    heapq.heapify(heap)
    
    while n != 0 :
        mnum, num = heapq.heappop(heap)
        if num >= heap[0][1] :
            num -= 1
            n -= 1
        heapq.heappush(heap, (-num, num))
        
    lst = [x for y,x in heap]
    if lst[0] <= 0 :
        return 0
    for i in lst :
        answer += (i**2)
        
    return answer
  
  
  # heapq를 사용하여 최대값을 빠르게 찾아내 -1을 해준다.
  # (-num, num)을 heap에 넣어주면서 최대 힙을 구현함.
  # 아래 코드로 시도하였으나 효용성 테스트에서 시간초과가 발생함. heapq를 이용한 방법 생각해냄.
  

def solution(n, works):
    answer = 0
    
    while n != 0 :
        works[works.index(max(works))] -= 1
        n -= 1
    
    if works[0] < 0 : return 0
    for i in works :
        answer += int(pow(i, 2))
        
    return answer
