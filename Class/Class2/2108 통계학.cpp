#include <bits/stdc++.h>

using namespace std;

int main() {
    int n; cin >> n; int length = n;
    vector<int> vt; vector<int> temp;
    map<int ,int> m;
    while(n-- > 0) {
        int num; cin >> num;
        vt.push_back(num);
        m[num]++;
    }
    sort(vt.begin(), vt.end());
    int mx = 0;
    for(auto it = m.begin(); it != m.end(); it++) {
        mx = max(mx, it->second);
    }
    for(auto it = m.begin(); it != m.end(); it++) {
        if(it->second == mx) {
            temp.push_back(it->first);
        }
    }
    int answer = 0;
    if(temp.size() > 1) {
        answer = temp[1];
    } else {
        answer = temp[0];
    }
    int sum = accumulate(vt.begin(), vt.end(), 0);
    int aver = round(float(sum) / float(length));
    if(aver == -0) {
        aver = 0;
    }
    
    cout << aver << '\n';
    cout << vt[length/2] << '\n';
    cout << answer << '\n';
    cout << vt[vt.size()-1] - vt[0];
}
