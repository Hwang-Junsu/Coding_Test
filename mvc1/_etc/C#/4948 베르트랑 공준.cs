using System;
using static System.Console;

class Program
{
    static bool isPrime(int number) {
        if(number % 2 == 0) return false;
        for(int i = 3; i <= (int)Math.Sqrt(number); i+=2) {
            if(number % i == 0) return false;
        }
        return true;
    }
    static void Main() {
        while(true) {
            string s = ReadLine();
            if(s[0] == '0') break;
            int n = int.Parse(s);
            if(n == 1) {
                WriteLine(1); continue;
            }
            int count = 0;
            for(int i = n+1; i <= n*2; i++) {
                if(isPrime(i)) count ++;
            }
            
            WriteLine(count);
        }
    }
}
