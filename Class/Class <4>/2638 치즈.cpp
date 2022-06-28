#include <bits/stdc++.h>

using namespace std;

int board[101][101];
bool visited[101][101];
int dx[4] = {-1 ,0 , 1, 0};
int dy[4] = {0, 1, 0, -1};
int n,m;

void disunite(int sx, int sy) {
    
    board[sx][sy] = 2;
    visited[sx][sy] = true;
    
    deque<pair<int, int>> queue;
    queue.push_back({sx,sy});
    
    while(!queue.empty()) {
        
        int x = queue.front().first; int y = queue.front().second;
        queue.pop_front();
        
        for(int i = 0 ; i < 4; i++) {
            int nx = x + dx[i]; int ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if(board[nx][ny] == 1) continue;
            if(!visited[nx][ny] && board[nx][ny] == 0) {
                board[nx][ny] = 2;
                visited[nx][ny] = true;
                queue.push_back({nx, ny});
            }
        }
    }
}

void meltingCheese(int x, int y) {
    if(board[x][y] != 1) return;
    
    
    
    
}

void init() {
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < m; j++) {
            visited[i][j] = false;
        }
    }
}

void print() {
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cout << board[i][j] << " ";
        }
        cout << '\n';
    }
}

int main() {
    cin >> n >> m;
    
    for(int i = 0 ; i < n ; i++) {
        for(int j = 0; j < m; j++) {
            cin >> board[i][j];
        }
    }
    disunite(0,0);
    print();
}
