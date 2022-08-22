#include <bits/stdc++.h>

using namespace std;

// 움푹 들어간 부분을 미리 체크?

int main() {
    
    int h, w;
    cin >> h >> w;
    int wall[501] = {0}; // index는 길이, value는 높이
    for(int i = 0 ; i < w; i++) {
        int num; cin >> num;
        wall[i] = num;
    }
    int start_wall = -1;
    int highest = 0;
    int answer = 0;
    int h_index = 0;
    for(int i = 0 ; i < w; i++) {
        if(start_wall == -1 && wall[i] > 0) {
            start_wall = i; highest = wall[i];
            continue;
        }
        
        if(wall[i] > wall[i-1]) {
            
            for(int k = 0; k < wall[i]; k++) {
                int l = i-1; int count = 0;
                while(true) {
                    if(wall[l] <= k) count++;
                    else break;
                    l--;
                }
                if(l >= 0) answer += count;
            }
        }
        
        

    }
    cout << answer;
}

//http://boj.kr/9ab7a66cf7124f16a43f7fd1a00cca77
