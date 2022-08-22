import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val n = sc.nextInt()
    var dp = LongArray(96){0}
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    
    for(i in 3..n) {
        dp[i] = dp[i-2] + dp[i-1]
    }
    
    println(dp[n])
}


// http://boj.kr/cbe97cfa40bd4f6890684594b9ef3a9c
