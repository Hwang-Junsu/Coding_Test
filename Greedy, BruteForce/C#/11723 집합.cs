using System;
using System.Text;
using static System.Console;
using System.Collections.Generic;




class Set {
    List<int> set = new List<int>();
    public StringBuilder sb = new StringBuilder();
    
    public void Add(int x) {
        if(!set.Contains(x)) set.Add(x);
    }
    public void Remove(int x) {
        if(set.Contains(x)) set.Remove(x);
    }
    public void Check(int x) {
        if(set.Contains(x)) sb.Append("1\n");
        else sb.Append("0\n");
    }
    public void Toggle(int x) {
        if(set.Contains(x)) set.Remove(x);
        else set.Add(x);
    }
    public void All() {
        set.Clear();
        for(int i = 1; i <= 20; i++) {
            set.Add(i);
        }
    }
    public void Empty() {
        set.Clear();
    }
    
}

class Program
{
    static void Main() {
        Set st = new Set();
        string s = ReadLine();
        int m = int.Parse(s);
        for(int i = 0 ; i < m; i++) {
            string[] order = ReadLine().Split(' ');
            
            
            if(order[0] == "add") {
                st.Add(int.Parse(order[1]));
            }
            else if(order[0] == "check") {
                st.Check(int.Parse(order[1]));
            }
            else if(order[0] == "remove") {
                st.Remove(int.Parse(order[1]));
            }
            else if(order[0] == "toggle") {
                st.Toggle(int.Parse(order[1]));
            }
            else if(order[0] == "all") {
                st.All();
            }
            else if(order[0] == "empty") {
                st.Empty();
            }
        }
        
        WriteLine(st.sb);
    }
}
