import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      int[] dp = new int[46];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 1;
      for(int i = 3; i <= n; i++) {
          dp[i] = dp[i-2] + dp[i-1];
      }
      
      System.out.format("%d", dp[n]);
    }
}

// http://boj.kr/e1bb61e001614488b91dfaac404097b3
