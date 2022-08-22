#include <bits/stdc++.h>

using namespace std;

long long p(long long num, int c) {
    
    long long result = 1;
    
    for(int i = 0 ; i < c; i++) {
        result *= num;
        result = result % 1234567891;
    }
    
    return result % 1234567891;
}

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    map<char, int> d;
    
    for(int i = 0 ; i < 26; i++) {
        d[i+'a'] = i+1;
    }
    
    int n; cin >> n; string s; cin >> s;
    long long answer = 0;
    for(int i = 0; i < s.size(); i++) {
        answer += (d[s[i]] * p(31, i));
    }
    cout << answer % 1234567891;
}
