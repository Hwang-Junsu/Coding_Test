def isPri(number) :
    if number == 0 or number == 1:
        return False
    
    pri = 0
    for i in range(2, number) :
        if number % i == 0 :
            pri += 1
            break
    if pri > 0 :
        return False
    else :
        return True

def solution(nums):
    answer = 0
    length = len(nums)
    for i in range(length) :
        for j in range(i+1, length) :
            for k in range(j+1, length) :
                if isPri(nums[i]+nums[j]+nums[k]) == True :
                    answer += 1
    

    return answer
