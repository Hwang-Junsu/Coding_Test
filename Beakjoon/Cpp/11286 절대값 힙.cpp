// 자료구조(우선순위 힙)
// 이전에 프로그래머스에서 한 번 연습했던 문제여서 수월하게 해결함.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    priority_queue<pair<int,int>, vector<pair<int ,int>>, greater<pair<int, int>>> pq;
    
    int n; cin >> n;
    
    while(n-- > 0) {
        
        int num; cin >> num;
        
        if(num != 0) {
            pq.push(make_pair(abs(num), num));
        }
        else {
            if(!pq.empty()){
            pair<int ,int> value = pq.top(); pq.pop();
            cout << value.second << '\n';
            } else {
                cout << 0 << '\n';
            }
        }
    }
}
