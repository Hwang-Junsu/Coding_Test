// BFS
// 3차원 배열을 이용해 높이까지 더한 그래프 문제, 변수와 순서만 신경써준다면 어렵진 않은 문제(귀찮을 뿐)

#include <bits/stdc++.h>
using namespace std;


int box[101][101][101];
bool visited[101][101][101];
vector<tuple<int, int, int>> idx;
int c, r, h;

int check() {
    int ans = 0;
    for(int i = 0 ; i < h; i++) {
        for(int j = 0; j < r; j++) {
            for(int k = 0; k < c; k++) {
                if(box[i][j][k] == -1) continue;
                if(box[i][j][k] == 0) {
                    return -1;
                }
                ans = max(box[i][j][k], ans);
            }
        }
    }
    return ans;
}


void bfs() {
    int dx[4] = {-1, 0, 1, 0}; int dy[4] = {0, 1, 0, -1}; int dz[2] = {-1, 1};
    deque<tuple<int, int, int>> queue;
    
    for(int i = 0 ; i < idx.size(); i++) {
        queue.push_back(idx[i]);
        visited[get<0>(idx[i])][get<1>(idx[i])][get<2>(idx[i])] = true;
    }
    
    while(!queue.empty()) {
        
        auto index = queue.front(); queue.pop_front();
        int z = get<0>(index); int x = get<1>(index); int y = get<2>(index);
        
        for(int i = 0 ; i < 6; i++) {
            int nx, ny, nz;
            if(i < 4) {
                nx = dx[i] + x; ny = dy[i] + y;
                
                if(nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
                if(visited[z][nx][ny]) continue;
                if(box[z][nx][ny] != 0) continue;
                
                visited[z][nx][ny] = true;
                box[z][nx][ny] = box[z][x][y] + 1;
                queue.push_back(make_tuple(z, nx, ny));
                
            }
            else {
                nz = dz[i-4] + z;
                
                if(nz < 0 || nz >= h) continue;
                if(visited[nz][x][y]) continue;
                if(box[nz][x][y] != 0) continue;
                
                visited[nz][x][y] = true;
                box[nz][x][y] = box[z][x][y] + 1;
                queue.push_back(make_tuple(nz, x, y));                
                
            }
        }
        
    }
}


int main() {
    cin >> c >> r >> h;
    
    for(int i = 0 ; i < h; i++) {
        for(int j = 0; j < r ;j++) {
            for(int k = 0 ; k < c; k++) {
                cin >> box[i][j][k];
                if(box[i][j][k] == 1) idx.push_back(make_tuple(i,j,k));
            }
        }
    }
    bfs();
    
    for(int i = 0; i < h; i++) {
        for(int j = 0; j < r; j++) {
            for(int k = 0; k < c; k++) {
                cout << box[i][j][k] << " ";
            }
            cout << '\n';
        }
        cout << '\n';
    }
    int answer = check();
    if(answer == -1) cout << -1;
    else cout << answer-1;
}
