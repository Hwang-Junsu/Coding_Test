// 자료구조 multiset.
// 32비트의 정수가 들어온다고 하여 long long 처리함.
// 초기 최대값 설정을 llong_min이 아닌 0으로 하여 실패했었음.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int t; cin >> t;
    
    while(t-- > 0) {
        int n; cin >> n;
        multiset<long long> ms;
        
        for(int i = 0 ; i < n; i++) {
            char od; int num; cin >> od;
            if(od == 'I') {
                cin >> num; ms.insert(num);
            }
            if(od == 'D') {
                cin >> num;
                if(ms.size() != 0) {
                    if(num < 0) {
                        ms.erase(ms.begin());
                    } else {
                        ms.erase(--ms.end());
                    }
                }
            }
        }
        
        
        if(ms.size() == 0) cout << "EMPTY" << '\n';
        else {
            long long mx = LLONG_MIN; long long mn = LLONG_MAX;
            while(ms.size() != 0) {
                mx = max(mx, *ms.begin());
                mn = min(mn, *ms.begin());
                ms.erase(ms.begin());
            }
            cout << mx << " " << mn << '\n';
        }
        
    }
}
