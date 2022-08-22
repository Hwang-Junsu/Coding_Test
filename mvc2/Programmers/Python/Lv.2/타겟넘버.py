def solution(numbers, target):
    global answer
    answer = 0
    length = len(numbers)
    
    def dfs(start, depth) :
        global answer
        if depth == length :
            if start == target :
                answer += 1
            return
        
        dfs(start + numbers[depth], depth+1)
        dfs(start - numbers[depth], depth+1)
    
    dfs(numbers[0], 1)
    dfs(-numbers[0], 1)
    
    return answer
