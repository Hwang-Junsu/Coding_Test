#include <bits/stdc++.h>

using namespace std;


int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, k; cin >> n >> k;
    deque<int> q;
    for(int i = 0 ; i < n; i++) {
        q.push_back(i+1);
    }
    int count = 0;
    
    cout << '<';
    while(!q.empty()) {
        if(q.size() == 1) {
            cout << q.front();
            break;
        }
        count++;
        if(count == k) {
            cout << q.front() << ", ";
            q.pop_front(); count = 0;
        } else {
            int num = q.front(); q.pop_front();
            q.push_back(num);
        }
    }
    cout << '>';
    
}
