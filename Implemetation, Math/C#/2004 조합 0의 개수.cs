using System;
using static System.Console;

class Program
{
    static void Main() {
        string[] s = ReadLine().Split(' ');
        long n = long.Parse(s[0]); long m = long.Parse(s[1]);
        // n! , (n-m)!, m!
        long fc = 0; long tc = 0;
        long num = 2;
        while(num <= n) {
            tc += (n/num);
            num *= 2;
        }
        num = 2;
        while(num <= (n-m)) {
            tc -= ((n-m)/num);
            num *= 2;
        }
        num = 2;
        while(num <= m) {
            tc -= (m/num);
            num *= 2;
        }
        num = 5;
        while(num <= n) {
            fc += (n/num);
            num *= 5;
        }
        num = 5;
        while(num <= (n-m)) {
            fc -= ((n-m)/num);
            num *= 5;
        }
        num = 5;
        while(num <= m) {
            fc -= (m/num);
            num *= 5;
        }
        WriteLine(Math.Min(fc, tc));
    }
}
