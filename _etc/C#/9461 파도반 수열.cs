using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        
        long[] dp = new long[101];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        dp[3] = 1;
        dp[4] = 2;
        dp[5] = 2;
        
        for(int i = 5; i < 101; i++) {
            dp[i] = dp[i-1] + dp[i-5];
        }
        
        for(int i = 0 ; i < n; i++) {
            string s2 = Console.ReadLine();
            int num = int.Parse(s2);
            Console.WriteLine(dp[num]);
        }
    }
}

// http://boj.kr/692cb9c1e4d84b878c2f00902958ed3c
