#include <bits/stdc++.h>

using namespace std;
char board[51][51];


int func(int sh, int sw, int hei, int wid) {
    int ans = 2501;
    for(int k = 0; k < 2; k++) {
        int count = 0;
        for(int i = sh; i < hei; i++) {
            for(int j = sw; j < wid; j++) {
                
                if(k == 0) {
                    
                    if(i%2 == 0) {
                        if(j%2==0) {
                            if(board[i][j] != 'W') count++;
                        }
                        else {
                            if(board[i][j] != 'B') count++;
                        }
                    }
                    else {
                        if(j%2==1) {
                            if(board[i][j] != 'W') count++;
                        }
                        else {
                            if(board[i][j] != 'B') count++;
                        }
                    }
                    
                }
                else {
                    
                    if(i%2 == 0) {
                        if(j%2==0) {
                            if(board[i][j] != 'B') count++;
                        }
                        else {
                            if(board[i][j] != 'W') count++;
                        }
                    }
                    else {
                        if(j%2==1) {
                            if(board[i][j] != 'B') count++;
                        }
                        else {
                            if(board[i][j] != 'W') count++;
                        }
                    }
                    
                }
            }
        }
        ans = min(count, ans);
    }
    return ans;
}

int main() {
    int n,m;
    cin >> n >> m;
    int answer = 2501;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            cin >> board[i][j];
        }
    }
    
    //보드 자르기
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(i+8 > n || j+8 > m) continue;
            
            answer = min(answer, func(i, j, i+8, j+8));
        }
    }
    cout << answer;
}
