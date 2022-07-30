
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

