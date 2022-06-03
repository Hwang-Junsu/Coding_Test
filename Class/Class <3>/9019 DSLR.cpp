#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(10000);
bool vi[10000];


int D(int num) {
    return (num*2) % 10000;
}
int S(int num) {
    int n = num-1;
    if(n < 0) n = 9999;
    return n;
}
int L(int num) {
    deque<int> temp;
    string s = "";
    while(num != 0) {
        temp.push_front(num%10);
        num /= 10;
    }
    while(temp.size() != 4) {
        temp.push_front(0);
    }
    for(int i = 1; i < 4; i++) {
        s += temp[i]+'0';
    }
    s += temp[0]+'0';
    return stoi(s);
    
}
int R(int num) {
    deque<int> temp;
    string s = "";
    while(num != 0) {
        temp.push_front(num%10);
        num /= 10;
    }
    while(temp.size() != 4) {
        temp.push_front(0);
    }
    s += temp[temp.size()-1]+'0';
    for(int i = 0; i < 3; i++) {
        s += temp[i]+'0';
    }
    return stoi(s);
}


void bfs(string visited[], int start, int end) {
    
    vi[start] = true;
    deque<int> queue;
    queue.push_back(start);
    bool stop = false;
    while(!queue.empty()) {
        
        int v = queue.front(); queue.pop_front();
        if(v == end) stop = true;

        for(int i = 0 ; i < 4; i++) {
            if(!vi[graph[v][i]]) {
                visited[graph[v][i]] += visited[v];
                
                if(i == 0) {
                    visited[graph[v][i]] += "D";
                    queue.push_back(graph[v][i]);
                }
                if(i == 1) {
                    visited[graph[v][i]] += "S";
                    queue.push_back(graph[v][i]);
                }
                if(i == 2) {
                    visited[graph[v][i]] += "L";
                    queue.push_back(graph[v][i]);
                }
                if(i == 3) {
                    visited[graph[v][i]] += "R";
                    queue.push_back(graph[v][i]);
                }
                vi[graph[v][i]] = true;
            }
            if(stop) break;
        }
        if(stop) break;
    }


}

int main() {
    int t; cin >> t;
    string vis[10000];
    for(int i = 0 ; i < 10000; i++) {
        graph[i].push_back(D(i));
        graph[i].push_back(S(i));
        graph[i].push_back(L(i));
        graph[i].push_back(R(i));
    }
    
    while(t-- > 0) {
        
        int a,b; cin >> a >> b;
        
        for(int i = 0 ; i < 10000; i++) {
            vi[i] = false;
            vis[i] = "";
        }

        bfs(vis, a, b);
        cout << vis[b] << '\n';
    }
    
}
