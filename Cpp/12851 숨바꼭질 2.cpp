// 최단 시간과 방법의 수까지 구해야 했던 문제임.
// 처음에는 BFS와 DFS 모두 사용하여 풀려고 했으나 시간초과.
// X-1, X+1, 2*X의 경우의 수 세가지 밖에 없으니 그래프를 굳이 만들지 않고 BFS를 돌림.
// 동생을 가장 처음 만난 지점에서 시간을 t변수에 저장하고, 다음에 t도 고려하여 정답을 도출함.


#include <bits/stdc++.h>

using namespace std;


int n,m,t;
int answer = 0;
int dist[200001];
bool visited[200001];

void init() {
    for(int i = 0 ; i < 200001; i++) {
        dist[i] = -1;
        visited[i] = false;
    }
}

void bfs(int start) {
    
    deque<pair<int, int>> queue;
    visited[start] = true;
    
    queue.push_back(make_pair(start,0));
    while(!queue.empty()) {
        
        int now_node = queue.front().first; int now_second = queue.front().second;
        queue.pop_front();
        visited[now_node] = true;
        
        if(answer && now_node == m && t == now_second){
            answer++;
        }
        if(!answer && now_node == m) {
            t = now_second;
            answer++;
        }
        
        
        if(now_node-1 >= 0 && !visited[now_node-1]) {
            queue.push_back(make_pair(now_node-1, now_second + 1));
        }
        
        if(now_node+1 < 100001 && !visited[now_node+1]) {
            queue.push_back(make_pair(now_node+1, now_second + 1));
        }
        
        if(now_node*2 < 100001 && !visited[now_node*2]) {
            queue.push_back(make_pair(now_node*2, now_second + 1));
        }
        
    }
}



int main() {
    cin >> n >> m;
    init();
    bfs(n);
    
    cout << t << '\n';
    cout << answer << '\n';

}
