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
          
          dp[i] = dp[i-1] + dp[i-2];
      }
      
      System.out.format("%d", dp[n]);
      
      
    }
}

// http://boj.kr/9365a86ec6b5439fb777381c20cd44c6
