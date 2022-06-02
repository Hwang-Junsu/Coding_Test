#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> graph(10000);

bool check(vector<int> vt) {
    int start = vt[0];
    for(int i = 1 ; i < vt.size(); i++) {
        if(vt[i] != start) return false;
    }
    return true;
}

int D(int num) {
    int n = num * 2;
    if(n > 10000) n %= 10000;
    return n;
}
int S(int num) {
    int n = num-1;
    if(n < 0) n = 9999;
    return n;
}
int L(int num) {
    if(num < 10) return -1;
    vector<int> temp;
    string s = "";
    while(num != 0) {
        temp.push_back(num%10);
        num /= 10;
    }
    if(check(temp)) return -1;
    int length = temp.size();
    
    for(int i = length-2; i >= 0; i--) {
        s += (temp[i] + '0');
    }
    s += (temp[length-1]+'0');
    
    return stoi(s);
}
int R(int num) {
    if(num < 10) return -1;
    vector<int> temp;
    string s = "";
    while(num != 0) {
        temp.push_back(num%10);
        num /= 10;
    }
    if(check(temp)) return -1;
    int length = temp.size();
    
    s += (temp[0]+'0');
    for(int i = length-1; i > 0; i--) {
        s += (temp[i] + '0');
    }
    
    return stoi(s);
}


void bfs(string visited[], int start, int end) {
    
    deque<int> queue;
    queue.push_back(start);
    bool stop = false;
    while(!queue.empty()) {
        
        int v = queue.front(); queue.pop_front();
        if(v == end) stop = true;
        for(int i = 0 ; i < 4; i++) {
            if(graph[v][i] == -1) continue;
            if(visited[graph[v][i]] == "") {
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
            }
            if(stop) break;
        }
        if(stop) break;
    }


}

int main() {
    int t; cin >> t;
    string answer = "";
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
            vis[i] = "";
        }
        bfs(vis, a, b);
        cout << vis[b] << '\n';
    }
    for(int i = 0; i < 4; i++) {
        cout << graph[1111][i] << " ";
    }
}
