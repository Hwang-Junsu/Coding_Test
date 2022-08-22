def findIndex(keypad, wantIndex) :
    for r in range(len(keypad)) :
        for c in range(len(keypad[0])) :
            if wantIndex == keypad[r][c] :
                return (r,c)
            
def fingerDistance(keypad, pres, target) :
    dist = abs(pres[0]-target[0]) + abs(pres[1]-target[1])
    return dist
    

def solution(numbers, hand):
    answer = ""
    right_pres = (0,0) # 오른쪽 현재 위치정보
    left_pres = (0,0) # 왼쪽 현재 위치정보
    keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 0, 11]
    ]
    right_pres = findIndex(keypad, 11)
    left_pres = findIndex(keypad, 10)
    
    for num in numbers :
        
        if num == 1 or num == 4 or num == 7 :
            answer += "L"
            left_pres = findIndex(keypad, num)
        elif num == 3 or num == 6 or num == 9 :
            answer += "R"
            right_pres = findIndex(keypad, num)
        else :
            target = findIndex(keypad, num)
            if fingerDistance(keypad, left_pres, target) < fingerDistance(keypad, right_pres, target) :
                answer += "L"
                left_pres = findIndex(keypad, num)
            elif fingerDistance(keypad, left_pres, target) > fingerDistance(keypad, right_pres, target) :
                answer += "R"
                right_pres = findIndex(keypad, num)
            else :
                if hand == "right" :
                    answer += "R"
                    right_pres = findIndex(keypad, num)
                elif hand == "left" :
                    answer += "L"
                    left_pres = findIndex(keypad, num)

    
    return answer
            
