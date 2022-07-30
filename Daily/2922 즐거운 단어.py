
# 모든 경우의 수를 직접 모두 구하는 방법. (시간초과)
c = ['A','E','I','O','U']
v = [chr(ord('A')+i) for i in range(26) if chr(ord('A')+i) not in c]
a = c+v
arr = []
word = input()
length = len(word)

def check(string, compare, index, max_length, c_count, v_count) :
    if c_count == 3 : return
    if v_count == 3 : return
    if max_length <= index :
        if 'L' in compare :
            arr.append(compare)
            return
        else :
            return

    if string[index] != '_' :
        if string[index] in c :
            check(string, compare + string[index], index+1, max_length, c_count+1, 0)
        elif string[index] in v :
            check(string, compare + string[index], index+1, max_length, 0, v_count+1)
        return

    for alpha in a :
        if alpha in v :
            check(string, compare + alpha, index+1, max_length, 0, v_count+1)
        if alpha in c :
            check(string, compare + alpha, index+1, max_length, c_count+1, 0)


check(word, "" , 0 ,length ,0 , 0)
print(len(arr))


# 갯수만 구하기
import sys

sys.stdin = open("input.txt", "r")


c = ['A','E','I','O','U']
v = [chr(ord('A')+i) for i in range(26) if chr(ord('A')+i) not in c]
word = input()
def check(string, index, c_count, v_count, contain) :
    if c_count >= 3 : return 0
    if v_count >= 3 : return 0
    if len(string) == index :
        if contain > 0 :
            return 1
        else :
            return 0
    answer = 0
    if string[index] != '_' :
        if string[index] in c :
            answer = check(string,  index+1, c_count+1, 0, contain)
        elif string[index] in v :
            if string[index] == "L" :
                answer = check(string, index+1, 0, v_count+1, contain+1)
            else :
                answer = check(string, index+1, 0, v_count+1, contain)
    else :
        answer += 5*check(string, index+1, c_count+1, 0, contain)
        answer += 1*check(string, index+1, 0, v_count+1, contain+1)
        answer += 20*check(string, index+1, 0, v_count+1, contain)

    return answer


print(check(word , 0 ,0 , 0, 0))


