n = input()
strl = []
intl = []
n = [ord(n[i]) for i in range(len(n))]
for i in range(len(n)) :
    if n[i] >= 65 and n[i] <= 90 :
        strl.append(str(chr(n[i])))
    elif n[i] >= 48 and n[i] <= 57 :
        intl.append(int(chr(n[i])))
strl = sorted(strl)
ans = sum(intl)

for i in range(len(strl)) :
    print(strl[i], end = "")
print(ans)


# 1. 내 풀이 - 입력받는 문자를 아스키 코드로 분류후에 숫자와 문자열을 구분해 줌
#            - 각 리스트에 담은 뒤 문자열은 정렬해주고, 숫자는 모두 더한 후 출력조건에 맞게 출력함.


# 2. 개선 사항 - isalpha() 함수를 사용하면 훨씬 쉽게 풀 수 있었으나 함수의 존재를 몰랐음..
