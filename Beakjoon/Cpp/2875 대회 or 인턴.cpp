#include <bits/stdc++.h>

using namespace std;

int main() {
    int n,m,k;
    cin >> n >> m >> k;
    int team = 0;
    // 팀을 먼저 만들어 줌.
    while(1) {
        if(n < 2 || m < 1) break;
        n -= 2;
        m -= 1;
        team += 1;
    }
    // 남아있는 사람의 수.
    int res = n + m;
    // 인턴으로 갈 사람을 만듬, 남은 사람이 인턴으로 가야될 사람보다 많다면 그래도 break, 없다면 한 팀을 쪼개서 보냄.
    while(1) {
        
        if(res >= k) break;
        else {
            res += 3;
            team -= 1;
        }
    }
    cout << team;
}
