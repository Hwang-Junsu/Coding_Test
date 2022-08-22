import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      long[] dp = new long[1001];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 3;
      dp[3] = 5;
      
      for(int i = 4; i < n+1; i++) {
          dp[i] = (dp[i-1] + 2*dp[i-2])%10007;
      }
      
      System.out.println(dp[n]);
      
    }
}

// http://boj.kr/db73c86a7c7f41a9a500769bd0829a63
