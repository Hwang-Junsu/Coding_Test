// 벽을 하나씩 다 부셔가면서 접근했을 때 -> 시간 초과
// 질문검색에서 3차원 배열 이용에 대한 힌트를 얻었음.

#include <bits/stdc++.h>

using namespace std;

int n,m;
int board[1001][1001];
int dist[1001][1001][2];


void bfs(int sx, int sy) {
    int dx[4] = {-1,0,1,0}; int dy[4] = {0,1,0,-1};
    dist[sx][sy][1] = 1;
    deque<pair<pair<int, int>, int>> queue;
    queue.push_back({{sx, sy},1});
    
    while(!queue.empty()) {
        
        int x = queue.front().first.first; int y = queue.front().first.second;
        int block = queue.front().second;
        queue.pop_front();
        
        for(int i = 0 ; i < 4; i++) {
            
            int nx = dx[i]+ x; int ny = dy[i] + y;
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            
            if(board[nx][ny] == 1 && block) {
                queue.push_back({{nx, ny} , 0});
                dist[nx][ny][block-1] = dist[x][y][block] + 1;
            } else if(board[nx][ny] == 0 && dist[nx][ny][block] == 0) {
                queue.push_back({{nx, ny}, block});
                dist[nx][ny][block] = dist[x][y][block] + 1;
            }
        }
        
        
    }
    
}
int main() {
    
    cin >> n >> m;
    for(int i = 0 ; i < n; i++) {
        string s; cin >> s;
        for(int j = 0 ; j < m; j++) {
            board[i][j] = s[j] - '0';
        }
    }
    bfs(0,0);
    
    if(dist[n-1][m-1][0] != 0 && dist[n-1][m-1][1] != 0) {
        cout << min(dist[n-1][m-1][0], dist[n-1][m-1][1]);
    } else if(dist[n-1][m-1][0] == 0 && dist[n-1][m-1][1] == 0) {
        cout << -1;
    } else {
        cout << max(dist[n-1][m-1][0], dist[n-1][m-1][1]);
    }
}
