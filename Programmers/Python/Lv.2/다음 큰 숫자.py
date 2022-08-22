def solution(n):
    num = n
    binary_num = list(format(n, 'b'))
    countOne = binary_num.count("1")
    count = 0
    while countOne != count :
        num += 1
        binary_num = list(format(num, 'b'))
        count = binary_num.count("1")

    return num
