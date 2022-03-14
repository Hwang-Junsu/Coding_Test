using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        int[] dp = new int[100001];
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        
        for(int i = 4; i <= n ; i++) {
            
            if((int)(Math.Pow((int)(Math.Pow(i, 0.5)), 2)) == i) dp[i] = 1;
            else {
                dp[i] = dp[i-1] + 1 ;
                
                for(int j = 1; j*j <= i; j++) {
                    
                    dp[i] = Math.Min(dp[i], dp[i-j*j] + dp[j*j]);
                }
            }
            
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/0b0efbe256f049d09ed4dfad81557e50
