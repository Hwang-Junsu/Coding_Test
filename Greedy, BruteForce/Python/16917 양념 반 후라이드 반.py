a,b,c,x,y = map(int, input().split()); price = 0
if a+b < 2*c : price = a*x + b*y
else :
    if x >= y : price = y*2*c + (x-y)*a
    else : price = x*2*c + (y-x)*b
price = min(price, max(x,y) * c * 2)
print(price)
