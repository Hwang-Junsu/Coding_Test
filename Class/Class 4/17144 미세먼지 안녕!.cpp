// 고민해야할 부분. 배열 돌리기와, 동시에 진행되는 먼지 확산.
// 먼지확산은 spread_map 2차원배열을 만들어 한꺼번에 더해주었음.

#include <bits/stdc++.h>

using namespace std;

int room[51][51];
int spread_map[51][51];
int dust_count;
int r,c,t;
int cleaner_top = -1;
int cleaner_bot = -1;

int count() {
    
    int cnt = 0;
    for(int i = 0 ; i < r; i++) {
        for(int j = 0; j < c; j++) {
            if(room[i][j] != -1) cnt += room[i][j];
        }
    }
    return cnt;
}

void spread() { // 미세먼지 확산과 스프레드맵 초기화.
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++) {
            int dust = room[i][j] / 5;
            int beSpread = 0;
            
            if(room[i][j] > 0) {
                
                if(i-1 >= 0 && room[i-1][j] != -1) {
                    spread_map[i-1][j] += dust;
                    beSpread += 1;
                }
                if(j-1 >= 0 && room[i][j-1] != -1) {
                    spread_map[i][j-1] += dust;
                    beSpread += 1;
                }
                if(i+1 < r && room[i+1][j] != -1) {
                    spread_map[i+1][j] += dust;
                    beSpread += 1;
                }
                if(j+1 < c && room[i][j+1] != -1) {
                    spread_map[i][j+1] += dust;
                    beSpread += 1;
                }
            }
            room[i][j] -= (dust*beSpread);
        }
    }
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++) {
            room[i][j] += spread_map[i][j];
            spread_map[i][j] = 0;
        }
    }
}

void work() {
    
    int sx = cleaner_top-1; int sy = 0;
    
    while(true) {
        room[sx][sy] = room[sx-1][sy]; sx--;
        if(sx == 0) break;
    }
    while(true) {
        room[sx][sy] = room[sx][sy+1]; sy++;
        if(sy == c-1) break;
    }
    while(true) {
        room[sx][sy] = room[sx+1][sy]; sx++;
        if(sx == cleaner_top) break;
    }
    while(true) {
        room[sx][sy] = room[sx][sy-1]; sy--;
        if(sy == 1) break;
    }
    room[sx][sy] = 0;
    
    sx = cleaner_bot+1; sy = 0;
    while(true) {
        room[sx][sy] = room[sx+1][sy]; sx++;
        if(sx == r-1) break;
    }
    while(true) {
        room[sx][sy] = room[sx][sy+1]; sy++;
        if(sy == c-1) break;
    }
    while(true) {
        room[sx][sy] = room[sx-1][sy]; sx--;
        if(sx == cleaner_bot) break;
    }
    while(true) {
        room[sx][sy] = room[sx][sy-1]; sy--;
        if(sy == 1) break;
    }
    room[sx][sy] = 0;
}



int main() {
    cin >> r >> c >> t;
    for(int i = 0 ; i < r; i++) {
        for(int j = 0; j < c; j++) {
            cin >> room[i][j];
            if(room[i][j] == -1) {
                if(cleaner_top == -1) cleaner_top = i;
                else cleaner_bot = i;
            }
        }
    }
    while(t-- > 0) {
        spread();
        work();
    }
    
    cout << count();
    
}
