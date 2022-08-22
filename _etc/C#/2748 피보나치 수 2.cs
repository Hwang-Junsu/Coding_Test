using System;

class Program
{
    static void Main() {
        long[] dp = new long[91];
        
        string s = Console.ReadLine();
        long n = long.Parse(s);
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        
        for(int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        Console.WriteLine(dp[n]);
    }
}

// https://www.acmicpc.net/source/40422498
