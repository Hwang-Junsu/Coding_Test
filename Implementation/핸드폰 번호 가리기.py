def solution(phone_number):
    answer = ''
    back_num = phone_number[-4:-1] + phone_number[-1]
    for i in range(len(phone_number)-4):
        answer += '*'
    answer += back_num
    
    return answer
  
  
#  1. 내 풀이 - 슬라이싱을 이용하여 맨 뒤 네 글자를 잘라 내고, 남은 번호의 개수만큼 별을 answer에 추가해준다.
