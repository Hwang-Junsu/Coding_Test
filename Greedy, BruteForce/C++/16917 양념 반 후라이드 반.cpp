#include <bits/stdc++.h>

using namespace std;

int main() {
    int a,b,c,x,y; // a는 후라이드 b는 양념 c는 반반치킨 가격, x는 후라이드, y는 양념 치킨의 필요 개수
    cin >> a >> b >> c >> x >> y; 
    int price = 0;
    int min_count = min(x,y);
    if(a + b < 2 * c) price = a*x + b*y;
    else {
        if(x >= y) price = min_count * 2 * c + (x-min_count) * a;
        else price = min_count * 2 * c + (y-min_count) * b;
    }
    
    // 반반으로만 샀을 경우와 가격 비교
    price = min(price, max(x,y) * 2 * c);
    
    cout << price;
}
