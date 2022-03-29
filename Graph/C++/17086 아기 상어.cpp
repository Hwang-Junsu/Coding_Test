#include <bits/stdc++.h>

using namespace std;

int w, h;
int board[51][51];
int visited[51][51];
int dx[8] = {-1, -1, 0, 1, 1, 1, 0, -1};
int dy[8] = {0, 1, 1, 1, 0, -1, -1, -1};
vector<pair<int, int>> sharkIndex;

int bfs(pair<int, int> index) {
    
    int safeDistance = 0;
    bool danger = false;
    queue<pair<int,int>> queue;
    queue.push(index);
    visited[index.first][index.second] = 0;
    
    while(!queue.empty()) {
        pair<int,int> v = queue.front();
        queue.pop();
        
        for(int i = 0; i < 8; i++) {
            
            int nx = v.first + dx[i];
            int ny = v.second + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
            if(visited[nx][ny] > 0 || (nx == index.first && ny == index.second)) continue;
            if(board[nx][ny] == 1) {
                danger = true;
            }
            visited[nx][ny] = visited[v.first][v.second] + 1;
            safeDistance = max(safeDistance, visited[nx][ny]);
            queue.push(make_pair(nx, ny));
        }
        
        if(danger) break;
    }
    return safeDistance-1;
}

void init() {
    for(int i = 0 ; i < 51; i++) {
        fill_n(visited[i], 51, 0);
    }
}

void print() {
    
    for(int i = 0 ; i < h; i++) {
        for(int j = 0; j < w; j++) {
            cout << visited[i][j] << " ";
        }
        cout << '\n';
    }
    
    cout << '\n';
}

int main() {
    cin >> h >> w;
    for(int i = 0 ; i < h; i++) {
        for(int j = 0 ; j < w; j++) {
            cin >> board[i][j];
            if(board[i][j] == 1) sharkIndex.push_back(make_pair(i,j));
        }
    }
    
    int max_value = 0;
    
    for(int i = 0; i < sharkIndex.size(); i++) {
        max_value = max(max_value, bfs(make_pair(sharkIndex[i].first,sharkIndex[i].second)));
        print();
        init();
    }
    cout << max_value;
}
