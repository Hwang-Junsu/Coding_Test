using System;
using static System.Console;


class Program
{
    static void Main() {
        string[] s = ReadLine().Split(' ');
        int n  = int.Parse(s[0]); int m = int.Parse(s[1]);
        int answer = 0;
        if(n >= 3) {
            if(m > 6) answer = m-2;
            else answer = Math.Min(4, m);
            
        } else {
            if(n==1) answer = 1;
            else answer = Math.Min(4, ((m-1)/2)+1);
        }
            
        WriteLine(answer);
    }
}
