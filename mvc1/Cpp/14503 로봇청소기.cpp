#include <bits/stdc++.h>

using namespace std;


int n,m,nowx,nowy,dir;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

void printBoard(int board[][50]) {
    for(int i = 0; i < n; i++) {
        for (int j = 0 ; j < m; j++) {
            cout << board[i][j] << " ";
        }
        cout << '\n';
    }
    cout << '\n';
}

int main() {
    int map[50][50];
    int answer = 0;
    for(int i = 0 ; i < 50; i++) {
        memset(*map, 0, 50);
    }
    cin >> n >> m;
    cin >> nowx >> nowy >> dir; // dir 0 북 1 동 2 남 3 서
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            int num; cin >> num;
            map[i][j] = num;
        }
    }
    bool cantMove = false;
    int count = 0;
    while(true) {
        if(map[nowx][nowy] == 0) {
            map[nowx][nowy] = 2; answer += 1; count = 0;
        }
        dir = dir-1;
        if(dir < 0) dir = 3;
        
        if(map[nowx + dx[dir]][nowy + dy[dir]] == 0) {
            nowx += dx[dir]; nowy += dy[dir];
        }
        else {
            count++;
            if(count == 4) {
                int nx = nowx + dx[(dir+2)%4]; int ny = nowy + dy[(dir+2)%4];
                if(nx < 0 || ny < 0 || nx >= n || ny >= m || map[nx][ny] == 1) {
                    cantMove = true; break;
                }
                else {
                    nowx = nx; nowy = ny; count = 0;
                }
            }
        }
        if(cantMove) break;
    }

    cout << answer;
}
