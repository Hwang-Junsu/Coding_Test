def solution(number, k):
    answer = ''
    st = [number[0]]
    for num in number[1:] :
        while len(st) > 0 and st[-1] < num and k > 0 :
            k-=1
            st.pop()
        st.append(num)
    
    if k != 0 :
        st = st[:-k]

    return ''.join(st)
