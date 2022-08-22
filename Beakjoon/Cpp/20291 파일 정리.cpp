#include <bits/stdc++.h>

using namespace std;

int main() {
    int n; cin >> n;
    map<string, int> d;
    while(n-- > 0) {
        string s; cin >> s;
        
        int index = 0;
        for(int i = 0 ; i < s.size(); i++) {
            if(s[i] == '.') {
                index = i; break;
            }
        }
        string ex = s.substr(index+1);
        d[ex]++;
    }
    for(auto it = d.begin(); it != d.end(); ++it) {
        cout << it->first << " " << it->second << '\n';
    }
}
