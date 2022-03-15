
import java.util.Scanner

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val n = sc.nextInt()
    var dp = Array(46){0}
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    
    for(i in 3..n) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    println(dp[n])
}

// http://boj.kr/d3f7decf81014732b2a4fe951da4d910
