import java.util.Scanner
import kotlin.math.*

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val n = sc.nextInt()
    var dp = Array(1000001){0}
    
    dp[0] = 0
    dp[1] = 0
    dp[2] = 1
    dp[3] = 1
    
    for(i in 4..n) {
        if(i%6 == 0) dp[i] = min(min(dp[i/3]+1, dp[i/2] +1), dp[i-1] +1)
        else if(i%3 == 0) dp[i] = min(dp[i/3]+1, dp[i-1]+1)
        else if(i%2 == 0) dp[i] = min(dp[i/2]+1, dp[i-1]+1)
        else dp[i] = dp[i-1]+1
    }
    
    println(dp[n])
}

// http://boj.kr/0cc1a2f70cb44255a27ef566994ec938
