#include <bits/stdc++.h>
using namespace std;


int main(void){
    string s; getline(cin, s);
    int space; cin >> space;
    map<char, int> dict;
    for(int i = 0 ; i < 26; i++) {
        int num; cin >> num;
        dict['a'+i] = num;
    }
    bool cant = false;
    bool upper = true;
    string title = "";
    char prev = '.';
    
    for(int i = 0; i < s.size(); i++) {
        bool same = false;
        if(prev == s[i]) {
            same = true;
        }
        if(s[i] == ' ') {
            if(!same) {
                space--; upper = true;
            }
            prev = s[i];
            if(space < 0) {
                cant = true;
                break;
            }
            continue;
        }
        char now;
        if(s[i] >= 'a') {
            now = s[i];
        } else {
            now = s[i]+32;
        }
        
        if(!same) dict[now]--;
        prev = now;
        
        if(dict[now] < 0) {
            cant = true;
            break;
        }
        
        if(upper) {
            char up;
            if(s[i] < 'a') {
                up = s[i];
            } else {
                up = s[i]-32;
            }
            title += up;
            s += up+32;
            upper = false;
        }
        
    }
    
    if(cant) cout << -1 << '\n';
    else {
        cout << title << '\n';
    }
    
}
