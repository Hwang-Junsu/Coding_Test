using System;

class Program
{
    static void Main() {
        string s = Console.ReadLine();
        int n = int.Parse(s);
        
        int[] arr = new int[301];
        int[] dp = new int[301];
        
        for(int i = 1; i <= n; i++) {
            string s2 = Console.ReadLine();
            int num = int.Parse(s2);
            arr[i] = num;
        }
        
        dp[0] = 0;
        dp[1] = arr[1];
        dp[2] = arr[1] + arr[2];
        
        for(int i = 3; i <= n; i++) {
            dp[i] = Math.Max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2]);
        }
        
        Console.WriteLine(dp[n]);
    }
}

// http://boj.kr/1d16a0d76ffd4c799c473f1e540faca1
