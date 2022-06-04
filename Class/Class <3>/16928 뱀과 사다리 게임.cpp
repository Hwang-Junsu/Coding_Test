// BFS,
// 디테일을 잘 신경써야 할 것 같다.


#include <bits/stdc++.h>

using namespace std;

int dist[101];
int goal[101];


void bfs(int start) {
    
    dist[start] = 0;
    deque<int> queue;
    queue.push_back(start);
    
    while(!queue.empty()) {
        if(dist[100] != -1) break;
        int v = queue.front(); queue.pop_front();
        
        
        for(int i = 1; i <= 6; i++) {
            int next = v + i;
            if(goal[next] != next) next = goal[next];
            if(dist[next] == -1 && v + i <= 100) {
                queue.push_back(next);
                dist[next] = dist[v]+ 1;
            }
        }
    }
    
}

int main() {
    
    int ladder, snake;
    cin >> ladder >> snake;
    
    for(int i = 0; i < 101; i++) {
        goal[i] = i;
    }
    int start, end;
    while(ladder-- > 0) {
        cin >> start >> end;
        goal[start] = end;
    }
    while(snake-- > 0) {
        cin >> start >> end;
        goal[start] = end;
    }
    memset(dist, -1, sizeof(dist));
    bfs(1);
    
    cout << dist[100];
    
    
}
