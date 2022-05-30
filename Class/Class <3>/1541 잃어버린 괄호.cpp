// 문자열, 파싱, 덱, 그리디
// 최소값이 되는 조건은 마이너스를 만나면 다음 마이너스가 오기 전까지의 값을 더한다.

#include <bits/stdc++.h>

using namespace std;

int main() {
    string s; cin >> s;
    int answer = 0;
    deque<char> oper; deque<int> number;
    vector<int> cal;
    string num = "";
    for(int i = 0 ; i < s.size(); i++) {
        
        if(s[i] == '-') {
            int temp = stoi(num);
            number.push_back(temp);
            oper.push_back('-');
            num = "";
        }
        else if(s[i] == '+') {
            int temp = stoi(num);
            number.push_back(temp);
            oper.push_back('+');            
            num = "";
        }
        else {
            num += s[i];
            if(i == s.size()-1) {
                int temp = stoi(num);
                number.push_back(temp);
            }
        }
    }
    
    while(true) {
        
        if(oper.front() == '+') {
            
            int a = number.front(); number.pop_front();
            int b = number.front(); number.pop_front();
            
            number.push_front(a+b);
            oper.pop_front();
        }
        
        else if(oper.front() == '-') {
            
            cal.push_back(number.front()); number.pop_front();
            oper.pop_front();
            
        }
        
        if(oper.size() == 0) {
            cal.push_back(number[0]);
            break;
        }
        
    }
    answer = cal[0];
    for(int i = 1 ; i < cal.size(); i++) {
        answer -= cal[i];
    }
    cout << answer;
}
