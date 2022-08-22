using System;
using static System.Console;

class Program
{
    static void Main() {
        string s = ReadLine();
        int answer = s[0] == 'd' ? 10 : 26;
        for(int i = 1 ; i < s.Length; i++) {
            if(s[i] == 'c') {
                if(s[i-1] == s[i]) answer *= 25;
                else answer *= 26;
            }
            if(s[i] == 'd') {
                if(s[i-1] == s[i]) answer *= 9;
                else answer *= 10;
            }
        }
        WriteLine(answer);
    }
}
