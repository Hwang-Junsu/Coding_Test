#include <bits/stdc++.h>

using namespace std;

int main() {
    int n,m;
    cin >> n >> m;
    int answer = 0;
    
    if(n >= 3) {
        if(m <= 6) answer = min(4, m);
        else answer = m-2;
    }
    else {
        if(n < 2) answer = 1;
        else {
            answer = min(4, ((m-1)/2) + 1);
        }
    }
    
    cout << answer;
}
