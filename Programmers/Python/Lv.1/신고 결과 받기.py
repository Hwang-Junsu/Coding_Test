def file_report(report) :
    temp = report.split(' ')
    return (temp[0], temp[1])

def solution(id_list, report, k):
    answer = [0] * len(id_list)
    
    data = dict()
    
    for i in range(len(id_list)) :
        data[id_list[i]] = [[], 0, False] #1. 신고한 사람 리스트 // 2. 신고당한 수 // 3. 정지 여부
    
    for i in range(len(report)) :
        
        if not file_report(report[i])[1] in data[file_report(report[i])[0]][0] :
            data[file_report(report[i])[1]][1] += 1
            data[file_report(report[i])[0]][0].append(file_report(report[i])[1])
    
    for name in id_list :
        if data[name][1] >= k :
            data[name][2] = True

    index = 0
    for name in id_list :
        mail = 0
        for rp in data[name][0] :
            if data[rp][2] == True :
                mail += 1
        answer[index] = mail
        index += 1
    
    return answer
        
