using System;
using static System.Console;

class Program
{
    static void Main() {
        string[] s = ReadLine().Split(' ');
        int n = int.Parse(s[0]); int m = int.Parse(s[1]); int k = int.Parse(s[2]);
        int team = 0;
        while(true) {
            if(n < 2 || m < 1) break;
            n -= 2; m -= 1;
            team++;
        }
        int res = n + m;
        
        while(true) {
            if(res >= k) break;
            res += 3; team-=1;
        }
        WriteLine(team);
    }
}
