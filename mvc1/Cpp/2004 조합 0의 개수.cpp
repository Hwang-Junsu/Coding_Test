#include <bits/stdc++.h>

using namespace std;

int main() {
    long long n,m,answer;
    long long num, count;
    cin >> n >> m;
    long long fc = 0, tc = 0;
    
    for(long long i = 2; i <= n; i *= 2) {
        tc += n/i;
    }
    for(long long i = 5; i <= n; i *= 5) {
        fc += n/i;
    }
    for(long long i = 2; i <= m; i *= 2) {
        tc -= m/i;
    }
    for(long long i = 5; i <= m; i *= 5) {
        fc -= m/i;
    }
    for(long long i = 2; i <= n-m; i *= 2) {
        tc -= (n-m)/i;
    }
    for(long long i = 5; i <= n-m; i *= 5) {
        fc -= (n-m)/i;
    }
    answer = min(fc, tc);
    cout << answer;
}


# 끝자리가 0일 경우는 2와 5가 한 쌍 있어야 가능함.
# 팩토리얼안의 개수를 세는 방법은 값에다가 구하고자 하는 계수를 나누어 주면서 계수를 곱해준다.
# 조합식 m! / n! * (m-n)! 을 이용하여 2와 5의 개수를 추출함.
