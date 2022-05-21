#include <bits/stdc++.h>

using namespace std;

int main() {
    int n,h,l;
    int answer = 0;
    vector<pair<int, int>> pillar;
    cin >> n;
    while(n-- > 0) {
        cin >> l >> h;
        pillar.push_back(make_pair(l,h));
    }
    sort(pillar.begin(), pillar.end());
    int prev_l = pillar[0].first; int prev_h = pillar[0].second;
    int index = 0; int rindex = pillar.size()-1;
    for(int i = 1 ; i < pillar.size(); i++) {
        int now_l = pillar[i].first; int now_h = pillar[i].second;
        
        if(prev_h < now_h) {
            answer += (now_l - prev_l) * (prev_h);
            prev_l = pillar[i].first; prev_h = pillar[i].second;
            index = i;
        }
    }
    if(prev_l != pillar[pillar.size()-1].first && prev_h != pillar[pillar.size()-1].second) {
        prev_l = pillar[pillar.size()-1].first; prev_h = pillar[pillar.size()-1].second;
        for(int i = pillar.size()-2; i >= index; i--) {
            int now_l = pillar[i].first; int now_h = pillar[i].second;
            if(prev_h < now_h) {
                answer += (prev_l-now_l) * (prev_h);
                prev_l = pillar[i].first; prev_h = pillar[i].second;
                rindex = i;
            }
        }
    }
    answer += ((pillar[rindex].first-pillar[index].first)+ 1) * pillar[index].second;
    
    cout << answer;
}
