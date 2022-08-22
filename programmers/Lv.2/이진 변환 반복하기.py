# s가 1이 될때까지 반복

def solution(string) :
    zero_count = 0
    count = 0
    ans = string
    while True :
        result = ""
        if ans == "1" :
            break
    
        count += 1
        for char in ans :
            if char == "1" :
                result += char
            else :
                zero_count += 1

        c = len(result)
        ans = str(bin(c))[2:]
    return [count, zero_count]
