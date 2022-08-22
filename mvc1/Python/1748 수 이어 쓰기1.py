n = input()
d = len(n);

f = int(n[0]); e = 0
if len(n) > 1 :
    e = int(n[1:])
v = 0; answer = 0;
for i in range(d) :
    if i == 0 : continue
    v += (i * int(pow(10, i-1)) * 9);

answer = v + (d * int(pow(10, d-1)) * (f-1) + ((e+1)*d))
print(answer)
