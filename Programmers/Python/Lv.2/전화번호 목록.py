def solution(phone_book):
    answer = True

    phone_book.sort()
    for i in range(len(phone_book)-1) :
        if len(phone_book[i]) < len(phone_book[i+1]) :
            if phone_book[i+1][:len(phone_book[i])] == phone_book[i] :
                answer = False
        
    return answer
  
  
# 문자열 정렬을 하게되면 접두어인 전화번호의 앞 뒤로 해당이 될 수 도 있는 문자열이 올 것이다. 그것을 이용하여 현재 문자열의 길이가 다음 문자열 보다 작을 경우
# 현재 문자열의 길이만큼 다음 문자열의 길이를 비교하여 같으면 answer를 false로 return하면 될 것이다.
