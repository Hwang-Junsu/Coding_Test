from collections import defaultdict

def check(word1, word2) :
    count = 0
    length = len(word1)
    for i in range(length) :
        if word1[i] == word2[i] :
            count += 1
            
    if count == length-1 :
        return True
    return False

def dfs(count, visited, distance, graph, v) :
    visited[v] = True
    distance[v] = count
    
    for x in graph[v] :
        if not visited[x] : 
            visited[x] = True
            dfs(count+1, visited, distance, graph, x)

def solution(begin, target, words):
    if target not in words :
        return 0
    
    answer = [0]
    words.append(begin)
    graph = defaultdict(list)
    visited = dict()
    distance = dict()
    for word in words :
        visited[word] = False
        distance[word] = -1
    
    now = ""
    
    for i in range(len(words)) :
        now = words[i]
        for word in words :
            if check(word, now) :
                graph[now].append(word)
        
    dfs(0, visited,distance, graph,begin)
    
    return distance[target]
  
  
# dfs로 접근한 문제, 그래프를 만드는 것이 핵심인 듯 하다.
# 허나, 테스트 케이스에서는 통과가 안되는데 채점 시 통과가 됨.
