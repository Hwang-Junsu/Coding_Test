import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      int[] dp = new int[100001];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 2;
      dp[3] = 3;
      
      for(int i = 4; i <= n; i++) {
          
          if((int)Math.pow((int)(Math.pow(i,0.5)), 2) == i) dp[i] = 1;
          else {
              dp[i] = dp[i-1] + 1;
              for(int j = 1; j*j <= i; j++) {
                  dp[i] = Math.min(dp[i], dp[i-j*j] + dp[j*j]);
              }
              
              
          }
      }
      
      System.out.format("%d", dp[n]);
      
      
    }
}

// http://boj.kr/437f44e012bd4fccaf338469d22ba4a5
