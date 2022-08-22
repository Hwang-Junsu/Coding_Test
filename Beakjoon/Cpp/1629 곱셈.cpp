#include<bits/stdc++.h>

using namespace std;


long long a,b,c;
long long mypow(long long num, long long p) {
    if(p == 0) return 1;
    if(p == 1) return num;
    if(p % 2 == 1) {
        return mypow(num, p-1) * num;
    }
    long long temp = mypow(num, p / 2);
    temp %= c;
    return (temp * temp) % c;
}

int main() {
    cin >> a >> b >> c;
    
    cout << (mypow(a, b)%c);
}
