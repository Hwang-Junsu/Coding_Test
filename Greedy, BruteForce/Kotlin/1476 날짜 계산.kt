import java.util.*
import kotlin.math.*

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var e = sc.nextInt(); var s = sc.nextInt(); var m = sc.nextInt(); var answer = 0;
    var se = 0; var ss = 0; var sm = 0;
    while(true) {
        se++; ss++; sm++; answer++;
        if(se > 15) se = 1; if(ss > 28) ss = 1; if(sm > 19) sm = 1;
        if(se == e && ss == s && sm == m) break
    }
    println(answer)
}
