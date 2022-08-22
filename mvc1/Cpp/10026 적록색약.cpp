
#include <bits/stdc++.h>

using namespace std;

char board[101][101];
int visited[101][101];
int n, mxarea;
int dx[4] = {-1,0,1,0};
int dy[4] = {0,1,0,-1};

void bfs(int x, int y, int& c) {
    if(visited[x][y] > 0) return;
    visited[x][y] = c++;
    mxarea = max(visited[x][y], mxarea);
    deque<pair<int, int>> queue;
    queue.push_back(make_pair(x,y));
    while(!queue.empty()) {
        
        auto v = queue.front(); queue.pop_front();
        
        for(int i = 0 ; i < 4; i++) {
            
            int nx = dx[i] + v.first; int ny = dy[i] + v.second;
            if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if(visited[nx][ny] > 0) continue;
            
            if(board[nx][ny] == board[v.first][v.second]) {
                visited[nx][ny] = visited[v.first][v.second];
                queue.push_back(make_pair(nx, ny));
            }
        }
    }
}
void change() {
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(board[i][j] == 'G') board[i][j] = 'R';
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
    int rgb = 0; int rb = 0;
    int count = 1;
    for(int i = 0; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            bfs(i,j, count);    
        }
    }
    rgb = mxarea; mxarea = 0; count = 1;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            visited[i][j] = 0;
        }
    }
    change();
    
    for(int i = 0; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            bfs(i,j, count);    
        }
    }
    rb = mxarea;
    
    cout << rgb << " " << rb;
    
}
