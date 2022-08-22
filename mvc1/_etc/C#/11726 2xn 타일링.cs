using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        
        long[] dp = new long[1001];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        
        for(int i = 4; i <= n; i++) {
            dp[i] = (dp[i-1] + dp[i-2])%10007;
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/0b8aa63f57904c2291c8699623abf6fe
