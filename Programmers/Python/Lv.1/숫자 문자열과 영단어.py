def solution(s):
    answer = []
    s += " "
    number = ""
    word = {"one" : "1", "two" : "2", "three" : "3", "four" : "4", "five" : "5", "six" : "6",
           "seven" : "7", "eight" : "8", "nine" : "9", "zero" : "0"}
    string = ""
    for ch in s:
        try :
            if len(string) > 0 :
                answer.append(word[string])
                string = ""
            temp = int(ch)
            answer.append(ch)
            
        except :
            string += ch
    
    for num in answer :
        number += num
    
    return int(number)
