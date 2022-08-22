def solution(arr1, arr2):
    answer = []
    result = 0
    temp = []
    for i in range(len(arr1)) :
        for k in range(len(arr2[0])) :
            result = 0
            for j in range(len(arr2)) :
                result += (arr1[i][j] * arr2[j][k])
            temp.append(result)
        answer.append(temp)
        temp = []
    
    return answer
