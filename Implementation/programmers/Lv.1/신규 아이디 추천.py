def solution(new_id):
    answer = ''
    dot_list = list()
    temp_list = list(new_id)
    lst = list()
    str_list = []
    
    for i in range(len(temp_list)) :
        #1단계 
        if 64 < ord(temp_list[i]) < 91 :
            temp_list[i] = temp_list[i].lower()
            
        #2단계
        if 96 < ord(temp_list[i]) < 123 or temp_list[i] == '-' or temp_list[i] == '_' or temp_list[i] == '.' or 47 < ord(temp_list[i]) < 58 :
            lst.append(temp_list[i])

    string = "".join(lst).replace("...........", ".").replace(".......", ".").replace(".....", ".").replace("...", ".").replace("..",".").strip(".")
    
    if len(string) == 0 :
        string += "a"
        
    if len(string) > 15 :
        string = string[:15]
    elif len(string) < 3 :
        while len(string) != 3 :
            string += string[len(string)-1]
            
    string = string.strip(".")
    
    return(string)
