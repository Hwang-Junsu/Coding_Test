#include <bits/stdc++.h>
using namespace std;


int solution(int n, vector<string> data) {
    int answer = 0;
    vector<char> first;
    vector<char> second;
    vector<char> oper;
    vector<int> inter;
    string names = "ACFJMNRT";

    for(int i = 0 ; i < n; i++) {
        first.push_back(data[i][0]);
        second.push_back(data[i][2]);
        oper.push_back(data[i][3]);
        inter.push_back(int(data[i][4] - '0'));
    }
    do {
        bool pass = true;
        for(int i = 0 ; i < n; i++) {
            
            int from = find(names.begin(), names.end(), first[i]) - names.begin();
            int to = find(names.begin(), names.end(), second[i]) - names.begin();
            
            if(oper[i] == '<') {
                if(abs(from-to) >= inter[i]+1) {
                    pass = false; break;
                }
            }
            else if(oper[i] == '>') {
                if(abs(from-to) <= inter[i]+1) {
                    pass = false; break;
                }
            }
            else  {
                if(abs(from-to) != inter[i]+1) {
                    pass = false; break;
                }
            }
            
        } 
        if(pass) answer++;
    }while(next_permutation(names.begin(), names.end()));
        
    return answer;
}
