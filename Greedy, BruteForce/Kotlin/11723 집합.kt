import java.util.*;


var set = ArrayList<Int>();
var sb = StringBuilder();

fun add(x : Int) {
    if(!set.contains(x)) set.add(x);
}
fun remove(x : Int) {
    if(set.contains(x)) set.remove(x);
}
fun check(x: Int) {
    if(!set.contains(x)) sb.append("0\n");
    else sb.append("1\n");
}
fun toggle(x: Int) {
    if(set.contains(x)) set.remove(x);
    else set.add(x);
}
fun all() {
    set.clear() 
    for(i in 1..20) set.add(i);
}
fun empty() {
    set.clear()
}
fun main(args: Array<String>) {
    
    var sc = Scanner(System.`in`)
    var n = sc.nextInt()
    
    while(n-- >= 0) {
        var order = sc.nextLine().split(' ')
        
        if(order[0] == "add") {add(order[1].toInt())}
        if(order[0] == "remove") {remove(order[1].toInt())}
        if(order[0] == "check") {check(order[1].toInt())}
        if(order[0] == "toggle") {toggle(order[1].toInt())}
        if(order[0] == "all") {all()}
        if(order[0] == "empty") {empty()}
    }
    
    print(sb);
}
