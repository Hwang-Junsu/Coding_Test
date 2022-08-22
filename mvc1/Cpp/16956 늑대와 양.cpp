#include <bits/stdc++.h>
using namespace std;



int r, c;
char board[501][501] = {"."};

void make_fence(int x, int y) {
    int row = r;
    int col = c;
    int dx[4] = {-1, 0, 1, 0};
    int dy[4] = {0, 1, 0, -1};
    
    for(int i = 0 ; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        
        if(nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
        if(board[nx][ny] == '.') board[nx][ny] = 'D';
        
    }
}

bool check(int x, int y) {
    int row = r;
    int col = c;
    int dx[4] = {-1, 0, 1, 0};
    int dy[4] = {0, 1, 0, -1};
    
    for(int i = 0 ; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        
        if(nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
        if(board[nx][ny] == 'W') return false;
        
    }
    return true;
}


int main() {
    scanf("%d %d", &c, &r);

    bool danger = false;
    for(int i = 0 ; i < c; i++) {
        for(int j = 0 ; j < r; j++) {
            char ch;
            cin >> ch;
            board[i][j] = ch;
        }
    }

    for(int i = 0 ; i < c; i++) {
        for(int j = 0 ; j < r; j++) {
            if(board[i][j] == 'W') make_fence(i, j);
            if(board[i][j] == 'S') {
                if(!check(i,j)) {
                    printf("0");
                    return 0;
                }
            }
        }
    }
    
    
    printf("1\n");
    for(int i = 0 ; i < c; i++) {
        for(int j = 0 ; j < r; j++) {
            printf("%c", board[i][j]);
        }
        printf("\n");
    }
}
