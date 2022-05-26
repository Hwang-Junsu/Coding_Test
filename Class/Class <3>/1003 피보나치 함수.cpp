// 자료구조 - Vector
// 알고리즘 - DP
// 풀이 - 처음에는 직접 0과 1을 재귀함수를 통해 vector<pair>>에 기록하면서 하려고 했으나, 복잡해짐.
// 0과 1의 개수가 규칙적으로 피보나치함수와 동일하게 증가함을 다시 상기시켜 DP적용함.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n; cin >> n;
    vector<pair<int, int>> vt;
    
    vt.push_back(make_pair(1,0));
    vt.push_back(make_pair(0,1));
    
    for(int i = 2 ; i < 41; i++) {
        int zero = vt[i-1].first + vt[i-2].first;
        int one = vt[i-1].second + vt[i-2].second;
        
        
        vt.push_back(make_pair(zero, one));
    }
    
    while(n-- > 0) {
        int num; cin >> num;
        cout << vt[num].first << " " << vt[num].second << '\n';
    }
    
    
}
