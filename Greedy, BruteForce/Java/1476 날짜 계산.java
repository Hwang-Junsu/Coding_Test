import java.util.*;

public class Main {
    public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      int e = sc.nextInt(); int s = sc.nextInt(); int m = sc.nextInt();
      int se = 0; int ss = 0; int sm = 0; int answer = 0;
      
      while(true) {
          se++; ss++; sm++; answer++;
          if(se > 15) se = 1; if(ss > 28) ss = 1; if(sm > 19) sm = 1;
          if(e == se && s == ss && m == sm) break;
      }
      System.out.println(answer);
    }
}
