#include <bits/stdc++.h>

using namespace std;


int main() {
    int e,s,m;
    int answer = 0;
    cin >> e >> s >> m; // max -> e = 15, s = 28, m = 19
    int lcm = 15*28*19;
    int se = 0; int ss = 0; int sm = 0;
    while(1) {
        
        se += 1; ss += 1; sm += 1;
        answer += 1;
        
        if(se > 15) se = 1;
        if(ss > 28) ss = 1;
        if(sm > 19) sm = 1;
        
        if(se == e && ss == s && sm == m) break;
    }
    cout << answer;
}

// 최대 횟수가 lcm 이므로, Brute Force를 이용해도 시간초과가 나지 않음.
