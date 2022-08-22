using System;
using static System.Console;

class Program
{
    
    static int findDigit(int number) {
        int result = 0;
        
        while(number > 0) {
            number = number / 10;
            result += 1;
        }
        return result;
    }
    
    static void Main() {
        long answer = 0;
        string s = ReadLine();
        int n = int.Parse(s);
        
        int frontNum = s[0] - '0';
        int elseNum = 0;
        if(s.Length > 1) {
            elseNum = int.Parse(s.Substring(1));
        }
        int d = findDigit(n); int value = 0;
        for(int i = 0 ; i < d; i++) {
            if(i==0) continue;
            else {
                value += (i * (int)Math.Pow(10, i-1)) * 9;
            }
        }
        
        answer = value + (d * (int)Math.Pow(10, d-1)) * (frontNum-1) + ((elseNum+1) * d);
        
        WriteLine(answer);
    }
}
