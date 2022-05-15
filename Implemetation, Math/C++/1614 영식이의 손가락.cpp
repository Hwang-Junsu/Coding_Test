#include <bits/stdc++.h>

using namespace std;

int main() {
    long long h,m;
    cin >> h >> m;
    long long answer = 0;
    
    if(h == 1) {
        answer += (m * 8);
    }
    else if(h == 2) {
        if(m%2 == 1) {
            answer += (2 * ((m+1)/2));
            answer += (6 * ((m+1)/2));
            answer -= 1;
        }
        else {
            answer += (2 * (m/2));
            answer += (6 * (m/2));
            answer += 1;
        }
    }
    else if(h == 3) {
        answer += 2;
        answer += (m * 4);
    }
    else if(h == 4) {
        answer += 4;
        
        if(m%2 == 0) {
            answer += (2 * (m/2));
            answer += (6 * (m/2));
            answer -= 1;
        }
        else {
            answer += 2 * ((m+1)/2);
            answer += 6 * (((m+1)/2)-1);
            answer -= 1;
        }
        
    }
    else if(h == 5) {
        answer += 4;
        answer += (m * 8);
    }
    
    cout << answer;
}
