# Cache Hit : CPU 가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우
# Cache Miss : CPU 가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우

# Cache Miss 
# 1. 캐시에 넣어준다.
# 2. 캐시가 가득차있다면, 가장 오래된 데이터를 제거하고 넣어준다.

# Cache Hit
# 1. 해당 데이터를 꺼낸 뒤,
# 2. 가장 최근 데이터 위치로 보내준다.

def solution(cacheSize, cities):
    answer = 0
    
    cache = []
    cities = [city.upper() for city in cities]
    
    for city in cities :
        
        if city in cache : # hit
            cache.remove(city)
            cache.append(city)
            answer += 1
        else : # miss
            cache.append(city)
            if len(cache) > cacheSize : cache.pop(0)
            answer += 5
    
    return answer
