// 구현, 덱
// 처음에는 reverse를 사용하여 구현하였더니 시간초과가 발생함.
// reverse시 start와 end의 변수만 바꿔주며 인덱스만 바꾸어서 시간초과 해결함.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t; cin >> t;
    string p; int n;
    string arr;
    while(t-- > 0) {
        deque<int> dq; bool error = false;
        cin >> p >> n;
        cin >> arr;
        string num = "";
        for(int i = 0 ; i < arr.size(); i++) {
            if(0 <= arr[i] - '0' && arr[i] - '0' < 10) {
                num += arr[i];
            }
            else {
                if(num.size() > 0) {
                    dq.push_back(stoi(num)); num = "";
                }
                else {
                    continue;
                }
            }
            if(i == arr.size()-1 && num.size() > 0) {
                dq.push_back(stoi(num)); num = "";
            } 
        }
        int start = 0; int end = dq.size()-1;
        for(int i = 0 ; i < p.size(); i++) {
            if(p[i] == 'R') {
                swap(start, end);
            }
            else if(p[i] == 'D') {
                if(dq.size() > 0) {
                    if(start == 0) dq.pop_front();
                    else dq.pop_back();
                }
                else {
                    error = true; break;
                }
            }
        }
        
        if(error) {
            cout << "error" << '\n';
        }
        else {
            cout << "[";
            if(start == 0) {
                for(int i = 0 ; i < dq.size(); i++) {
                    cout << dq[i];
                    if(i != dq.size()-1) cout << ",";
                }
            }
            else {
                for(int i = dq.size()-1 ; i >= 0; i--) {
                    cout << dq[i];
                if(i != 0) cout << ",";
            }
            }
            cout << "]";
            cout << '\n';
        }
    }
}
