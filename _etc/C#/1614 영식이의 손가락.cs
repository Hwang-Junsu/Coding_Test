using System;
using static System.Console;

class Program
{
    static void Main() {
        string s1 = ReadLine(); string s2 = ReadLine();
        long hurt = long.Parse(s1); long count = long.Parse(s2);
        long answer = 0;
        
        if(hurt%2 == 0) {
            if(hurt == 2) {
                if(count%2 == 1) {
                    answer += (2 * ((count+1)/2));
                    answer += (6 * ((count+1)/2));
                    answer -= 1;
                } else {
                    answer += (2* (count/2));
                    answer += (6*(count/2));
                    answer += 1;
                }
            }
            else {
                answer += 4;
                if(count%2 == 0) {
                    answer += (2 * (count/2));
                    answer += (6 * (count/2));
                    answer -= 1;
                }
                else {
                    answer += 2 * ((count+1)/2);
                    answer += 6 * (((count+1)/2) - 1);
                    answer -= 1;
                }
            }
        }
        else {
            answer += (hurt-1);
            if(hurt == 3) answer += (count * 4);
            else answer += (count * 8);
        }
        WriteLine(answer);
    }
}
