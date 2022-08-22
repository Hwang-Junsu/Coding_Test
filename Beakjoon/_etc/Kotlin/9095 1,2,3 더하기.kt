import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val num = sc.nextInt()
    
    var dp = Array(12, {0})
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 4
    
    for(i in 4..11) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    
    for(i in 0 until num) {
        var n = sc.nextInt()
        println("${dp[n]}")
    }
}

// http://boj.kr/e541cf715e304809b1b1a208b2605db4
