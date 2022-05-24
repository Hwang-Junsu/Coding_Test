#include <bits/stdc++.h>

using namespace std;

bool func(int number) {
    string str = to_string(number);
    int sixCount = 0;
    for(int i = 0; i < str.size(); i++) {
        if(str[i] == '6') sixCount++;
        else sixCount = 0;
        
        if(sixCount == 3) return true;
    }
    return false;
}

int main() {
    int n; cin >> n;
    // 숫자에서 연속으로 6이 세개 있는 숫자를 판별하는 함수를 만들자.
    int c = 0; int num = 665;
    
    while(true) {
        num++;
        if(func(num)) c++;
        if(c == n) break;
    }
    cout << num;
}
