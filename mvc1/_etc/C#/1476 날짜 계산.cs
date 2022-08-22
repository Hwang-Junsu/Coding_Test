using System;
using static System.Console;

class Program
{
    static void Main() {
        string[] st = ReadLine().Split(' ');
        int e = int.Parse(st[0]); int s = int.Parse(st[1]); int m = int.Parse(st[2]);
        int se = 0; int ss = 0; int sm = 0; int answer = 0;
        // Brute Force 되는 이유? -> 횟수가 다해봤자 7980 임.
        while(true) {
            answer += 1;
            se += 1; ss += 1; sm +=1;
            if(se > 15) se = 1; if(ss > 28) ss = 1; if(sm > 19) sm = 1;
            if(se == e && ss == s && sm == m) break;
        }
        WriteLine(answer);
    }
}
