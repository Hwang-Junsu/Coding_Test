using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        long[] dp = new long[91];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        
        for(int i = 3; i <= n ; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        Console.WriteLine(dp[n]);
    }
}


// http://boj.kr/e6cc7508acae4594891cf04b95d0b2f5
