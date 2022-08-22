import java.util.*
import kotlin.math.*

fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var hei = Array(9,{0})
    for(i in 0 until 9) {hei[i] = sc.nextInt()}; hei.sort()
    var l1 = 0; var l2 = 0;
    for(i in 0..8) {
        for(j in 0..8) {
            var s = hei.sum() - hei[i] - hei[j]
            if(s == 100) {l1 = i; l2 = j; break}
        }
    }
    for(i in 0..8) {
        if(i == l1 || i == l2) continue; println(hei[i])
    }
}
