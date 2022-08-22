#include <bits/stdc++.h>

using namespace std;

class dq {
    
    vector<int> d;
    
    
    public :
        void push_front(int x) {
            d.insert(d.begin(), x);
        }
        void push_back(int x) {
            d.push_back(x);
        }
        int pop_front() {
            if(d.size() == 0) return -1;
            int front = d.front();
            d.erase(d.begin());
            return front;
        }
        int pop_back() {
            if(d.size() == 0) return -1;
            int back = d.back();
            d.pop_back();
            return back;
        }
        int size() {
           return d.size(); 
        }
        int empty() {
            if(d.size() == 0) return 1;
            else return 0;
        }
        int front() {
            if(d.size() == 0) return -1;
            return d.front();
        }
        int back() {
            if(d.size() == 0) return -1;
            return d.back();
        }
};

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n; cin >> n;
    dq dq;
    
    while(n-- > 0) {
        string od; int num;
        cin >> od;
        
        if(od == "push_back") {
            cin >> num;
            dq.push_back(num);
        }
        if(od == "push_front") {
            cin >> num;
            dq.push_front(num);
        }
        if(od == "pop_back") {
            cout << dq.pop_back() << '\n';
        }
        if(od == "pop_front") {
            cout << dq.pop_front()<< '\n';
        }
        if(od == "size") {
            cout << dq.size() << '\n';
        }
        if(od == "empty") {
            cout << dq.empty() << '\n';
        }
        if(od == "front") {
            cout << dq.front() << '\n';
        }
        if(od == "back") {
            cout << dq.back() << '\n';
        }
        
        
        
    }
}
