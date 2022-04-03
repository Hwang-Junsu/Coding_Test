import java.util.*;

public class Main {
    public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(); int m = sc.nextInt(); int k = sc.nextInt();
      int team = 0;
      while(true) {
          if(n < 2 || m < 1) break;
          n -= 2; m-= 1; team += 1;
      }
      int res = n + m;
      while(true) {
          if(res >= k) break;
          res += 3; team -= 1;
      }
      System.out.println(team);
    }
}
