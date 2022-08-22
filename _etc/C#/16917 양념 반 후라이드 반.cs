using System;
using static System.Console;

class Program
{
    static void Main() {
        string[] s = ReadLine().Split(' ');
        int a = int.Parse(s[0]); int b = int.Parse(s[1]); int c = int.Parse(s[2]); 
        int x = int.Parse(s[3]); int y = int.Parse(s[4]);
        
        int min = Math.Min(x,y);
        int price = 0;
        if(a+b > 2*c) {
            if(x >= y) price = c*2*min + (x - min) * a;
            else price = c*2*min + (y - min) * b;
        }
        else price = a*x + b*y;
        
        price = Math.Min(price, c*2*Math.Max(x,y));
        WriteLine(price);
    }
}
