// bfs, 시뮬레이션.
// 거리가 가장 가까운 물고기를 저장해서 없애는게 핵심.
// 우선순위 큐를 사용하지 않고, int 변수로 저장해도 될 것 같긴함.


#include <bits/stdc++.h>

using namespace std;

int board[20][20];
int dist[20][20];
bool visited[20][20];
priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<tuple<int, int, int>>> pq;
int n;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};


pair<int, int> findShark() {
    
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < n ; j++) {
            if(board[i][j] == 9) return make_pair(i,j);
        }
    }
    return make_pair(-1,-1);
    
}

void findDistance(int x, int y, int size) { // 매개변수는 상어의 위치.
    
    dist[x][y] = 0;
    visited[x][y] = true;
    deque<pair<int, int>> queue;
    
    queue.push_back(make_pair(x,y));
    
    while(!queue.empty()) {
        
        auto v = queue.front(); queue.pop_front();
        
        for(int i = 0; i < 4; i++) {
            int nx = dx[i] + v.first; int ny = dy[i] + v.second;
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if(board[nx][ny] > size) continue;
            if(!visited[nx][ny]) {
                visited[nx][ny] = true;
                dist[nx][ny] = dist[v.first][v.second] + 1;
                queue.push_back(make_pair(nx, ny));
                if(board[nx][ny] != 0 && board[nx][ny] < size) pq.push(make_tuple(dist[nx][ny], nx, ny));
            }
        }
        
    }
}

void clear() {
    while(!pq.empty()) {
        pq.pop();
    }
}

void distInit() {
    for(int i = 0 ; i < n; i++) {
        memset(dist[i], -1, sizeof(dist[i]));
    }
}
void visitedInit() {
    for(int i = 0 ; i < n; i++) {
        memset(visited[i], false, sizeof(visited[i]));
    }
}

int main() {
    cin >> n; int answer = 0;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> board[i][j];
        }
    }
    auto shark = findShark(); int size = 2;
    board[shark.first][shark.second] = 0;
    int count = 0;
    
    while(true) {
        distInit();
        visitedInit();
        clear();
        findDistance(shark.first, shark.second, size);
        if(pq.empty()) break; // 잡을 물고기가 없으면 멈춤.
        int fishDist = get<0>(pq.top()); int fishX = get<1>(pq.top()); int fishY = get<2>(pq.top());
        answer += fishDist; shark.first = fishX; shark.second = fishY; board[shark.first][shark.second] = 0;
        if(++count == size) {
            size++; count = 0;
        }
        
        
    }
    cout << answer;
    
}
