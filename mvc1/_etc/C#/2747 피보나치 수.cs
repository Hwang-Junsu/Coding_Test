using System;

class Program
{
    static void Main() {
        int[] dp = new int[46];
        
        string s = Console.ReadLine();
        int n = int.Parse(s);
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        
        for(int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/c3d88576de5a4e1aa12a6f578d66bb85
