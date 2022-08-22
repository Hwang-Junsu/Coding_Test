def solution(record):
    answer = []
    id_info = {}
    nickname = ""
    for info in record :
        arr = info.split()
        state = arr[0]
        idnumber = arr[1]
        nickname = ""
        
        if state == "Enter" or state == "Change" :
            nickname = arr[2]
            id_info[idnumber] = nickname
    
    c = ""
    for info in record :
        arr = info.split()
        
        a = arr[0]
        b = arr[1]
        if a == "Change" or b == "Enter" :
            c = arr[2]
        
        if a != "Change" and b in id_info :
            if a == "Enter" : answer.append("%s님이 들어왔습니다." %(id_info[b]))
            else : answer.append("%s님이 나갔습니다." %(id_info[b]))
    
    
    return answer
