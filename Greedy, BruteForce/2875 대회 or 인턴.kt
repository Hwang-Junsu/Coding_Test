import java.util.*
import kotlin.math.*

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var n = sc.nextInt(); var m = sc.nextInt(); var k = sc.nextInt(); var team = 0;
    while(true) {
        if(n < 2 || m < 1) break
        n -= 2; m--; team++;
    }
    var res = n+m
    while(true) {
        if(res >= k) break
        res += 3; team--
    }
    println(team)    
}
