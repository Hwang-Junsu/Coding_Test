import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val num = sc.nextInt()
    
    var dp = LongArray(101, {0})
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    dp[3] = 1
    dp[4] = 2
    dp[5] = 2
    
    for(i in 6..100) {
        dp[i] = dp[i-1] + dp[i-5]
    }
    
    for(i in 0 until num) {
        var n = sc.nextInt()
        println("${dp[n]}")
    }
}

// http://boj.kr/1ac6b9c233804746b35432f14a334237
