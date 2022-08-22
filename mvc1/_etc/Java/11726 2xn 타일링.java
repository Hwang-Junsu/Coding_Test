import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      int n = s.nextInt();
      long[] dp = new long[1001];
      
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 2;
      dp[3] = 3;
      
      for(int i = 4; i < n+1; i++) {
          dp[i] = (dp[i-1] + dp[i-2])%10007;
      }
      
      System.out.println(dp[n]);
      
    }
}

// http://boj.kr/63982614b20540768bd69ac512053d92
