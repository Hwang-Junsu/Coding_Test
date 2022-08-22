// 우선순위 큐, 정렬

#include <bits/stdc++.h>

using namespace std;

bool compare(const pair<int ,int>& a, const pair<int, int>& b) {
    return a.second < b.second;
}
int main() {
    priority_queue<pair<int,int>, vector<pair<int, int>>, greater<pair<int,int>>> pq;
    vector<pair<int, int>> vt;
    int n; cin >> n;
    for(int i = 0 ; i < n; i++) {
        int num; cin >> num;
        pq.push(make_pair(num, i));
    }
    int save = 0; int index = 0;
    while(!pq.empty()) {
        
        pair<int, int> value = pq.top();
        pq.pop();
        
        if(value.first < pq.top().first) {
            value.first = index; index++;
        }
        else {
            value.first = index;
        }
        
        vt.push_back(value);
    }
    
    sort(vt.begin(), vt.end(), compare);
    for(int i = 0; i < vt.size(); i++) {
        cout << vt[i].first << " ";
    }
}
