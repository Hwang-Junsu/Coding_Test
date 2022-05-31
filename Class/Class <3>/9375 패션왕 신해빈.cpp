// 자료구조 해쉬/맵
// 부분집합을 이용하는 문제, 안입는 경우의 수를 추가하므로 기본 size에 +1을 하고
// 아무것도 입지 않는 경우를 하나 빼어줌.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int t; cin >> t;
    while(t-- > 0) {
        map<string, vector<string>> cloths;
        int n; cin >> n;
        int answer = 0;
        while(n-- > 0) {
            string s1, s2; cin >> s1 >> s2;
            cloths[s2].push_back(s1);
        }
        int temp = 1;
        for(auto it = cloths.begin(); it != cloths.end(); ++it) {
            temp *= (cloths[it->first].size()+1);
        }
        answer = temp-1;
        cout << answer << '\n';
        
    }
}
