#include <bits/stdc++.h>

using namespace std;

int board[51][51] = {0};
bool check[51][51] = {false};
int w, h;

bool bfs(pair<int,int> start) {
    if(check[start.first][start.second] == true || board[start.first][start.second] == 0) return false;
    
    int dx[8] = {-1,-1,0,1,1,1,0,-1};
    int dy[8] = {0,1,1,1,0,-1,-1,-1};
    queue<pair<int, int>> q;
    q.push(start); check[start.first][start.second] = true;
    
    while(!q.empty()) {
        auto v = q.front(); q.pop();
        
        for(int i = 0 ; i < 8; i++) {
            int nx = v.first + dx[i];
            int ny = v.second + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
            if(board[nx][ny] == 1 && check[nx][ny] == false) {
                q.push(make_pair(nx,ny));
                check[nx][ny] = true;
            }
            
        }
        
    }
    return true;
}

int main() {
    while(1) {
        int answer = 0;
        for(int i = 0; i < 51; i++) {
            memset(board[i], 0, sizeof(board[i]));
            memset(check[i], false, sizeof(check[i]));
        }
        
        cin >> w >> h;
        if(w == 0 && h == 0) break;
        
        for(int i = 0; i < h; i++) {
            for(int j = 0; j < w; j++) {
                cin >> board[i][j];
            }
        }
        
        for(int i = 0; i < h; i++) {
            for(int j = 0 ; j < w; j++) {
                if(bfs(make_pair(i,j))) answer += 1;
            }
        }
        
        cout << answer << endl;
    }
}
