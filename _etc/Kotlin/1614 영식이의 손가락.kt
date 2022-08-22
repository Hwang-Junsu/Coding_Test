import java.util.*;
import kotlin.math.*;

fun main(args: Array<String>) {

    var sc = Scanner(System.`in`)
    var h = sc.nextLong(); var c = sc.nextLong(); var answer : Long = 0
    if(h % 2 == 0L) {
        if(h == 2L) {
            if(c % 2 == 1L) {
                answer += (2 * ((c+1) / 2))
                answer += (6 * ((c+1) / 2))
                answer -= 1
            }
            else {
                answer += (2 * (c/2))
                answer += (6 * (c/2))
                answer += 1
            }
        }
        else {
            answer += 4
            if(c%2 == 0L) {
                answer += (2 * (c/2))
                answer += (6 * (c/2))
                answer -= 1
            }
            else {
                answer += 2 * ((c+1)/2)
                answer += 6 * (((c+1)/2)-1)
                answer -= 1
            }
        }
    }
    else {
        answer += (h-1)
        if(h == 3L) answer += (c*4)
        else answer += (c*8)
    }
    print(answer)
}
