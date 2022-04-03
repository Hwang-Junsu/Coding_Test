import java.util.*
import kotlin.math.*

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var s = sc.nextLine(); var answer = if(s[0] == 'd') 10 else 26
    for(i in 1 until s.length) {
        if(s[i] == 'd') {
            if(s[i] == s[i-1]) answer *= 9
            else answer *= 10
        }
        else {
            if(s[i] == s[i-1]) answer *= 25
            else answer *= 26
        }
    }
    println(answer)
}
