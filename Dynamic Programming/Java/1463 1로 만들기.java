import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      int[] dp = new int[1000001];
      
      dp[0] = 0;
      dp[1] = 0;
      dp[2] = 1;
      dp[3] = 1;
      
      for(int i = 4; i <= n; i++) {
          if(i%6 == 0) dp[i] = Math.min(Math.min(dp[i/3] +1, dp[i/2] +1), dp[i-1] +1 );
          else if(i%3 == 0) dp[i] = Math.min(dp[i/3] +1, dp[i-1] +1);
          else if(i%2 == 0) dp[i] = Math.min(dp[i/2] +1, dp[i-1] +1 );
          else dp[i] = dp[i-1] +1 ;
      }
      
      System.out.format("%d", dp[n]);
    }
}

# http://boj.kr/e45a8ab78bb0491f859f72d4f959f6d6
