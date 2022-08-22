using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        
        int[] dp = new int[12];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;
        
        for(int i = 4; i < 12; i++) {
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }
        
        for(int i = 0 ; i < n; i++) {
            string s2 = Console.ReadLine();
            int num = int.Parse(s2);
            Console.WriteLine(dp[num]);
        }
    }
}

// http://boj.kr/5c9a9242de8b45e09a4f61fd9bff849c
