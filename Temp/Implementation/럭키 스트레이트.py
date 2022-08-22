n = input()
length = len(n)

lt = n[:length//2]
rt = n[length//2:]

lt = [int(lt[i]) for i in range(len(lt))]
rt = [int(rt[i]) for i in range(len(rt))]

if sum(lt) == sum(rt) :
    print("LUCKY")
else :
    print("READY")

    
# 1. 내 풀이 - 입력받는 수가 짝수 개수만 들어오기 때문에 입력값의 길이를 반으로 나눈 후 슬라이싱을 통해 반으로 나누어 준다
