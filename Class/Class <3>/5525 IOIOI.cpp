// 문자열
// substr을 사용하여 완전탐색을 하면 50점만 맞는다.
// i일 경우 o,i가 아닐때까지 while문을 탐색하고 n만큼 나왔다면 답을 더해준다.
// 규칙에 따라 지속적으로 o,i가 나올 경우 k값을 하나 빼주고 answer를 더해주면서 시간을 절약할 수 있다.

#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n, m;
    string s;
    cin >> n >> m >> s;
    int answer = 0;

    for(int i = 0; i < m-2; i++) {
        if(s[i] == 'O') continue;
        int k = 0;
        while(s[i+1] == 'O' && s[i+2] == 'I') {
            
            k++; i+=2;
            
            if(k == n) {
                answer++; k--;
            }
        }
    }
    cout << answer;
}
