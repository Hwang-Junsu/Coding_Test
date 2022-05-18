using System;
using static System.Console;

class Program
{
    static bool isPrime(int number) {
        if(number % 2 == 0) return false;
        if(number == 1) return false;
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
            int j = n;
            for(int i = 1; i <= n; i++) {
                j = n-i;
                if(isPrime(i) && isPrime(j)) {
                    WriteLine(String.Format("{0} = {1} + {2}", i+j, i, j));
                    break;
                }
            }
            if(j == 0) {
                WriteLine("Goldbach's conjecture is wrong.");
            }
        }
    }
}
