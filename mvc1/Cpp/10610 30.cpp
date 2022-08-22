#include <bits/stdc++.h>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    string answer = "-1";
    int number = 0;
    
    string s;
    cin >> s;
    
    sort(s.begin(), s.end(), greater<char>());
    if(s[s.size()-1] != '0') {
        cout << -1;
        return 0;
    }
    for(int i = 0 ; i < s.size()-1; i++) {
        number += int(s[i]);
    }
    if(number%3 == 0) cout << s;
    else cout << -1;
}
