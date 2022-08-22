#include <bits/stdc++.h>

using namespace std;

class my_set {
    vector<int> arr;
    
    public :
        void add(int x);
        void remove(int x);
        void check(int x);
        void toggle(int x);
        void all();
        void empty();
};

void my_set::add(int x) {
    if(find(arr.begin(), arr.end(), x) == arr.end()) {
        arr.push_back(x);
    }
}
void my_set::remove(int x) {
    auto it = find(arr.begin(), arr.end(), x);
    if(it != arr.end()) {
        arr.erase(it);
    }
}
void my_set::check(int x) {
    if(find(arr.begin(), arr.end(), x) != arr.end()) cout << 1 << '\n';
    else cout << 0 << '\n';
}
void my_set::toggle(int x) {
    auto it = find(arr.begin(), arr.end(), x);
    if(it != arr.end()) {
        arr.erase(it);
    }
    else {
        arr.push_back(x);
    }
}
void my_set::all() {
    arr = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
}
void my_set::empty() {
    arr.clear();
}

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    my_set s1;
    int n; cin >> n;
    while(n--) {
        string od; int num;
        cin >> od;
        
        if(od == "add") {
            cin >> num; s1.add(num);
        }
        else if(od == "remove") {
            cin >> num; s1.remove(num);
        }
        else if(od == "check") {
            cin >> num; s1.check(num);
        }
        else if(od == "toggle") {
            cin >> num; s1.toggle(num);
        }
        else if(od == "all") {
            s1.all();
        }
        else if(od == "empty") {
            s1.empty();
        }
    }
}
