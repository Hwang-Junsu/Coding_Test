#include <bits/stdc++.h>

using namespace std;

int n,m;
int board[51][51];
int visited[51][51];
int cnt = 0;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};
vector<pair<int, int>> chicken;
vector<pair<int, int>> pick;
vector<pair<int, int>> house;

void findChicken() {
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            if(board[i][j] == 2) {
                chicken.push_back(make_pair(i,j));
                cnt++;
            }
            if(board[i][j] == 1) {
                house.push_back(make_pair(i,j));
            }
        }
    }
}

int countDist() {
    int result = 0;
    for(int i = 0 ; i < house.size(); i++) {
        
        result += (visited[house[i].first][house[i].second] - 1);
        
    }
    return result;
    
}

void init() {
    for(int i = 0 ; i < 51; i++) {
        memset(visited[i], 0, sizeof(visited[i]));
    }
    pick.clear();
}

void bfs() {
    
    deque<pair<int, int>> queue;
    for(int i = 0 ; i < pick.size(); i++) {
        queue.push_back(pick[i]);
        visited[pick[i].first][pick[i].second] = 1;
    }
    
    while(!queue.empty()) {
        
        auto v = queue.front(); queue.pop_front();
        
        for(int i = 0 ; i < 4; i++) {
            
            int nx = v.first + dx[i]; int ny = v.second + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if(visited[nx][ny] == 0) {
                visited[nx][ny] = visited[v.first][v.second] + 1;
                queue.push_back(make_pair(nx, ny));
            }
        }
    }
}

void print() {
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << visited[i][j] << " ";
        }
        cout << '\n';
    }
    cout << '\n';
}

int main() {
    cin >> n >> m;
    vector<int> index;
    int mn = 99999999;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < n; j++) {
            cin >> board[i][j];
        }
    }
    findChicken();
    for(int i = 0 ; i < cnt-m; i++) {
        index.push_back(0);
    }
    for(int i = 0 ; i < m; i++) {
        index.push_back(1);
    }
    
    do {
        init();
        
        for(int i = 0 ; i < index.size(); i++) {
            if(index[i] == 1) {
                pick.push_back(chicken[i]);
            }
        }
        
        bfs();
        mn = min(mn, countDist());
        
        
    }while(next_permutation(index.begin(), index.end()));
    cout << mn;
    
}
