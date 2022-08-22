using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        
        long[] dp = new long[1001];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 3;
        dp[3] = 5;
        
        for(int i = 4; i <= n; i++) {
            dp[i] = (dp[i-1] + 2*dp[i-2])%10007;
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/9d82fbd9c95047a49887b1f7c3cd706f
