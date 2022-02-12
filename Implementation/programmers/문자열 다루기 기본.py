def solution(s):
    temp = 0
    try :
        temp = int(s)
    except :
        return False
    else :
        if len(str(temp)) == 4 or len(str(temp)) == 6 :
            return True
        else :
            return False
          
# 파이썬의 try,except 구문을 이용하여 풀이함.
