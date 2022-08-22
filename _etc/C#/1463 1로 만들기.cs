
using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        int[] dp = new int[1000001];
        
        dp[0] = 0;
        dp[1] = 0;
        dp[2] = 1;
        dp[3] = 1;
        
        for(int i = 4; i <= n ; i++) {
            
            if(i%6 == 0) dp[i] = Math.Min(Math.Min(dp[i/3]+1, dp[i/2] +1), dp[i-1] +1);
            else if(i%3 == 0) dp[i] = Math.Min(dp[i/3] +1, dp[i-1] +1);
            else if(i%2 == 0) dp[i] = Math.Min(dp[i/2] +1, dp[i-1] +1);
            else dp[i] = dp[i-1] +1;
            
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/6b0ef0b9a454406eafb496f306492305
