def time_convert(time) :
    con = time.split(":")
    result = int(con[0]) * 60 + int(con[1])
    return result

def convert_tone(code) :
    code = code.replace("C#", "c")
    code = code.replace("D#", "d")
    code = code.replace("E#", "e")
    code = code.replace("F#", "f")
    code = code.replace("G#", "g")
    code = code.replace("A#", "a")
    code = code.replace("B#", "b")
    return code
        

def solution(m, musicinfos):
    answer = ""
    dic = dict()
    length = 0
    m = convert_tone(m)
    musicinfos.sort()
    for info in musicinfos :
        seq = 0
        musicinfo = info.split(',')
        length = time_convert(musicinfo[1]) - time_convert(musicinfo[0])
        name = musicinfo[2]
        scale = convert_tone(musicinfo[3])
        
        real_scale = scale * (length//len(scale)) + scale[:length%len(scale)]
        dic[real_scale] = [name, length]
        
    mx = 0
    for x in dic.keys() :
        if m in x : 
            if answer == "" : 
                answer = dic[x][0]
                mx = dic[x][1]
            else :
                if mx < dic[x][1] :
                    answer = dic[x][0]
    
    if answer == "" :
        return "(None)"
    return answer
    
 # string에 in 조건문 사용가능.
    
