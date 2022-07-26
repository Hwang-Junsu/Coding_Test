
lang = ""
v = input()

if v[0] == "_" or v[0].isupper() :
    lang = "Error"
elif v[len(v)-1] == "_" :
    lang = "Error"
elif "__" in v :
    lang = "Error"
else :
    for i in range(len(v)) :
        if 65 <= ord(v[i]) <= 90 :
            if lang == "C++" :
                lang = "Error"; break;
            lang = "Java"
        if v[i] == "_" :
            if lang == "Java" :
                lang = "Error"; break;
            lang = "C++"

        if i == len(v)-1 and lang == "" :
            lang = "Normal"

v = list(v)

if lang=="Java" : #c++로 변환
    length = len(v)
    i = 0

    while True :
        if length == i :
            break
        if 65 <= ord(v[i]) <= 90 :
            v[i] = chr(ord(v[i]) + 32)
            v.insert(i,'_')
            length+=1
        i+=1

    print("".join(v))
elif lang=="C++" :
    for i in range(len(v)-1) :
        if v[i] == "_" and v[i+1].isalpha() :
            v[i] = ""
            v[i+1] = chr(ord(v[i+1])-32)
    print("".join(v))
elif lang=="Normal" :
    print("".join(v))
else :
    print("Error!")

