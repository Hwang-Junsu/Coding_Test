import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      long[] dp = new long[91];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 1;
      for(int i = 3; i <= n; i++) {
          dp[i] = dp[i-2] + dp[i-1];
      }
      
      System.out.format("%d", dp[n]);
    }
}

// http://boj.kr/1a92f899943249f5aaa47e1e9010b2c8
