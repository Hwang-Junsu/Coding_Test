#include <vector>
#include <bits/stdc++.h>
using namespace std;

int visited[101][101];
int max_value;

int bfs(int m, int n, pair<int, int> start, vector<vector<int>> picture) {
    if(visited[start.first][start.second] != -1) return 0;
    int dx[4] = {-1, 0 ,1 ,0};
    int dy[4] = {0, 1, 0, -1};
    queue<pair<int,int>> queue;
    visited[start.first][start.second] = picture[start.first][start.second];
    queue.push(start);
    int count = 0;
    while(!queue.empty()) {
        
        auto v = queue.front(); queue.pop();
        if(picture[start.first][start.second] > 0) count++;
        for(int i = 0 ; i < 4; i++) {
            int nx = dx[i] + v.first;
            int ny = dy[i] + v.second;
            
            if(nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            if(visited[nx][ny] == -1 && (picture[nx][ny] == visited[start.first][start.second])){
                visited[nx][ny] = picture[start.first][start.second];
                queue.push(make_pair(nx,ny));
            }
        }
    }
    max_value = max(count, max_value);
    return visited[start.first][start.second];
}

void init() {
    max_value = 0;
    for(int i = 0; i < 101; i++) {
        memset(visited[i], -1, sizeof(visited[i]));
    }
}

vector<int> solution(int m, int n, vector<vector<int>> picture) {
    
    vector<int> answer(2);
    int area = 0;
    init();
    
    for(int i = 0 ; i < m ; i++) {
        for(int j = 0 ; j < n; j++) {
            if(bfs(m,n,make_pair(i,j),picture) > 0) area += 1;
        }
    }
    answer[0] = area;
    answer[1] = max_value;
    for(int i = 0 ; i < m; i++) {
        for(int j = 0 ; j < n; j++) {
            cout << visited[i][j] << " ";
        }
        cout << '\n';
    }
    
    return answer;
}
