def solution(answers):
    answer = []
    problems = 10000
    stu1 = [1,2,3,4,5]
    stu2 = [2,1,2,3,2,4,2,5]
    stu3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0,0,0]
    
    for i in range(len(answers)) :
        if answers[i] == stu1[i%len(stu1)] :
            score[0] += 1
        if answers[i] == stu2[i%len(stu2)] :
            score[1] += 1
        if answers[i] == stu3[i%len(stu3)] :
            score[2] += 1
    
    print(score)
    ans = max(score)
    for i in range(3) :
        if ans == score[i] :
            answer.append(i+1)
    return answer
