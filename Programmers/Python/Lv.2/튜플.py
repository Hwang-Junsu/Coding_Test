def solution(s):
    answer = []
    dic = {}
    a = s[1:-1]
    a = a.split('},{')
    a[0] = a[0][1:]
    a[len(a)-1] = a[len(a)-1][:-1]
    
    for i in range(len(a)) :
        a[i] = list(map(int,a[i].split(',')))
    
    a.sort(reverse=True, key = lambda x : len(x))
    
    for value in a[0] :
        dic[value] = 0
        
    for in_set in a :
        for value in in_set :
            dic[value] += 1
    
    sorted_dic = sorted(dic.items(), reverse = True, key = lambda x : x[1])
    for i in sorted_dic :
        answer.append(i[0])
    return answer
