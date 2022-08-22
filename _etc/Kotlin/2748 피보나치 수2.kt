import java.util.Scanner

fun main(args: Array<String>) {
    val sc: Scanner = Scanner(System.`in`)
    val n = sc.nextInt()
    var dp = LongArray(91){0}
    
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    
    for(i in 3..n) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    println(dp[n])
}

// http://boj.kr/a006d69268ff4b0ca1d9031641e09659
