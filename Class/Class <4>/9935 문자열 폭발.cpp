// 스택, 문자열
// 인덱스를 잘 맞추는 것이 중요.

#include <bits/stdc++.h>

using namespace std;


int main() {
    
    string s; cin >> s;
    string bomb; cin >> bomb;
    int length = bomb.size();
    
    vector<char> vt;
    
    for(int i = 0 ; i < s.size(); i++) {
        if(vt.size() == 0) {
            if(length == 1 && bomb[0] == s[i]) continue;
            vt.push_back(s[i]);
            continue;
        }
        
        if(vt.size() >= length-1 && s[i] == bomb[length-1]) {
            string temp = "";
            for(int i = vt.size()-length+1; i < vt.size(); i++) {
                temp += vt[i];
            }
            temp += s[i];
            if(temp == bomb) {
                for(int i = 0 ; i < length-1; i++) {
                    vt.pop_back();
                }
            }
            else {
                vt.push_back(s[i]);
            }
        }
        else {
            vt.push_back(s[i]);
        }
    }
    if(vt.size() == 0) cout << "FRULA";
    else {
        for(int i = 0 ; i < vt.size(); i++) {
            cout << vt[i];
        }
    }
}
