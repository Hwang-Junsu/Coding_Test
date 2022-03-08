from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    
    bridgeweight = 0
    truck_weights = deque(truck_weights)
    bridge = deque([0] * bridge_length)
    
    while len(bridge) :
        
        answer += 1
        bridgeweight -= bridge.popleft()
        
        if len(truck_weights) != 0 :
            if bridgeweight + truck_weights[0] <= weight :
                newtruck = truck_weights.popleft()
                bridge.append(newtruck)
                bridgeweight += newtruck
            else :
                bridge.append(0)
            
            
    return answer
  
  # 다리 위의 무게변수를 따로 구하는 것이 시간복잡도를 낮추는 핵심.
