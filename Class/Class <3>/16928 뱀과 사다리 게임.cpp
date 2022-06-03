#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(101);
int visited[101];
bool isVisited[101];
bool isSomething[101];
int isSnake[101];

void snakeInit(int start, int end) {
    for(int i = start; i <= end ; i++) {
        isVisited[i] = false;
    }
    
}

void bfs(int start) {
    
    visited[start] = 1;
    deque<int> queue;
    queue.push_back(start);
    
    while(!queue.empty()) {
        
        int v = queue.front(); queue.pop_front();
        
        if(isSnake[v] > 0) {
            snakeInit(v, isSnake[v]);
            queue.push_back(isSnake[v]);
            continue;
        }
        
        for(int x : graph[v]) {
            
            if(!isVisited[x]) {
                isVisited[x] = true;
                visited[x] = visited[v]+1;
                if(isSomething[x]) visited[x]--;
                queue.push_back(x);
            }
        }
    }
    
}

int main() {
    
    int ladder, snake;
    cin >> ladder >> snake;
    int start, end;
    while(ladder-- > 0) {
        cin >> start >> end;
        graph[start].push_back(end);
        isSomething[start] = true;
    }
    while(snake-- > 0) {
        cin >> start >> end;
        graph[start].push_back(end);
        isSomething[start] = true;
        isSnake[start] = end;
    }
    
    for(int i = 1; i < 100; i++) {
        
        if(graph[i].size() == 1) continue;
        for(int j = i+1 ; j <= i+6; j++) {
            if(j > 100) break;
            graph[i].push_back(j);
        }
    }
    
    bfs(1);
    cout << visited[100]-1 << '\n';
    
    
}
