#include <bits/stdc++.h>

using namespace std;

int visited[51];

int cal(string s, int start, int end) {
    
    int length = 0;
    for(int i = start; i < end ; i++) {
        if(s[i] == '(') {
            int count = s[i-1] - '0';
            length += count * cal(s, i+1, visited[i]) -1;
            i = visited[i];
            continue;
        }
        length++;
    }
    return length;
}

int main() {
    string s; cin >> s;
    stack<int> st;
    for(int i = 0; i < s.length(); i++) {
        if(s[i] == '(') {
            st.push(i);
        }
        else if(s[i] == ')') {
            visited[st.top()] = i;
            st.pop();
        }
    }
    cout << cal(s, 0, s.length()) << '\n';
}


// TIL
// 전처리를 통해 열린 괄호 인덱스 마다 visited[i]에 닫힌괄호 인덱스를 설정 해둔다.
// 재귀함수를 통해 괄호 안의 인덱스의 길이를 구하고 리턴한다.
