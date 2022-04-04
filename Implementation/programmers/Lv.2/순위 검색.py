def solution(info, query):
    answer = []
    # 모든 경우의 수를 해쉬로 만듬
    d = {}
    for lang in ["python", "cpp", "java", "-"] :
        for job in ["backend", "frontend", "-"] :
            for career in ["junior", "senior", "-"] :
                for food in ["chicken", "pizza", "-"] :
                    d[lang + job + career + food] = list()
    
    # 지원자에 대한 정보를 해쉬 리스트에 담음.
    for app in info :
        app = app.split()
        for lang in [app[0], "-"] :
            for job in [app[1], "-"] :
                for career in [app[2], "-"] :
                    for food in [app[3], "-"] :
                        d[lang + job + career + food].append(int(app[4]))
    
    for k in d.keys() :
        d[k].sort()

    for detail in query :
        detail = detail.replace(" and ", "")
        detail = detail.split()
        
        score = int(detail[1])
        detail = detail[0]
        
        info_score = d[detail]
        l = len(info_score)
        tmp = l
        
        low, high = 0, l-1
        
        while low <= high :
            mid = (high + low) // 2
            
            if score <= info_score[mid] :
                tmp = mid
                high = mid - 1
            else :
                low = mid + 1
        answer.append(l-tmp)
        
        
        
        
    return answer
  
  # 1. dict 이용하여 모든 경우의 수를 만듬
  # 2. 해당 dictionary key에 score를 넣을 수 있는 empty list를 만듬
  # 3. info를 순회하며 "-" 를 포함한 모든 key값에 score를 append 함.
  # 4. query 순회를 하기 이전에 먼저 score에 대한 이분탐색을 위해 value를 sort 함
  # 5. 각 query를 순회하면서 key값에 대한 이분 탐색을함.
  # 정답 
