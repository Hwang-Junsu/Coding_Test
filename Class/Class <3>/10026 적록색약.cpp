#include <bits/stdc++.h>

using namespace std;

char board[101][101];
int visited[101][101];
int n, mxarea;
int dx[8] = {-1,-1,0,1,1,1,0,-1};
int dy[8] = {0,1,1,1,0,-1,-1,-1};

void bfs(int x, int y) {
    
    visited[x][y] = 1;
    deque<pair<int, int>> queue;
    queue.push_back(make_pair(x,y));
    while(!queue.empty()) {
        
        auto v = queue.front(); queue.pop_front();
        
        for(int i = 0 ; i < 8; i++) {
            
            int nx = dx[i] + v.first; int ny = dy[i] + v.second;
            if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if(visited[nx][ny] > 0) continue;
            
            if(board[nx][ny] == board[v.first][v.second]) visited[nx][ny] = visited[v.first][v.second];
            else visited[nx][ny] = visited[v.first][v.second] + 1;
            mxarea = max(visited[nx][ny], mxarea);
            
            queue.push_back(make_pair(nx, ny));
        }
    }


}

int main() {
    cin >> n;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            cin >> board[i][j];
        }
    }
    bfs(0,0);
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ;j < n; j++) {
            cout << visited[i][j] << " ";
        }
        cout << '\n';
    }
    
}
