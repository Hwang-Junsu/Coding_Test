// 완전탐색(Brute Force)
// 숫자를 누르고 가는 경우와, 직접 위아래버튼으로 가는 경우를 둘다 검사한다.
// 숫자가 포함되어있는지 아닌지에 대해 판별하는 함수를 구현했다.

#include <bits/stdc++.h>

using namespace std;

bool check(vector<int> _error, int num) {
    if(find(_error.begin(), _error.end(), num) != _error.end()) return false;
    return true;
}

bool contains(vector<int> _error, int num) {
    if(num == 0) {
        if(!check(_error, num)) return false;
    }
    
    while(num != 0) {
        int d = num%10;
        if(!check(_error, d)) return false;
        num /= 10;
    }
    return true;
}

int digit(int num) {
    if(num == 0) return 1;
    int result = 0;
    while(num != 0) {
        result++;
        num /= 10;
    }
    return result;
}


int main() {
    int n; cin >> n;
    int m; cin >> m;
    int start = 100;
    if(n == 100) {
        cout << 0;
        return 0;
    }
    
    int answer = 99999999;
    vector<int> error;
    while(m-- > 0) {
        int num; cin >> num;
        error.push_back(num);
    }

    int temp2 = abs(n - start);
    
    for(int i = 0; i <= 1000000; i++) {
        int temp = 0;
        if(!contains(error, i)) continue;
        temp += digit(i);
        temp += abs(n-i);
        answer = min(temp, answer);
    }
    cout << min(answer,temp2);
}
