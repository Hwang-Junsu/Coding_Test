#include <bits/stdc++.h>

using namespace std;

int main() {
    string s;
    cin >> s;
    stack<int> st;
    int answer = 1;
    for(int i = 0 ; i < s.size(); i++) {
        if(st.empty()) {
            if(s[i] == 'd') st.push(10);
            else st.push(26);
        }
        
        else if(s[i] == 'd') {
            if(st.top() == 10 || st.top() == 9) st.push(9);
            else st.push(10);
        }
        else if(s[i] == 'c') {
            if(st.top() == 26 || st.top() == 25) st.push(25);
            else st.push(26);
        }
    }
    while(!st.empty()) {
        answer = answer * st.top();
        st.pop();
    }
    cout << answer;
}
