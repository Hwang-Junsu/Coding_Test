import java.util.*;

public class Main {
    public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      String s = sc.nextLine();
      int answer = (s.charAt(0) == 'd') ? 10 : 26;
      for(int i = 1 ; i < s.length(); i++) {
          if(s.charAt(i) == 'c') {
              if(s.charAt(i) == s.charAt(i-1)) answer *= 25;
              else answer *= 26;
          }
          else {
              if(s.charAt(i) == s.charAt(i-1)) answer *= 9;
              else answer *= 10;
          }
      }
      System.out.println(answer);
    }
}
