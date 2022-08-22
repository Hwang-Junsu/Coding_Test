import java.util.*;
import kotlin.math.*;

fun Swap(arr : IntArray) {
    var tmp: Int;
    tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
}

fun Next_Permutation(arr : IntArray, end : Int) : Boolean {
    var i = end-1;
    var temp = IntArray(2, {0});
    while(i > 0 && arr[i] <= arr[i-1]) --i;
        
    if(i == 0) return false;
        
    var j = end-1;
    while(arr[i-1] >= arr[j]) j -= 1;
    temp[0] = arr[i-1]; temp[1] = arr[j];
    Swap(temp);
    arr[i-1] = temp[0]; arr[j] = temp[1];
    j = end-1;
    while(i < j) {
        temp[0] = arr[i]; temp[1] = arr[j];
        Swap(temp);
        arr[i] = temp[0]; arr[j] = temp[1];
        i += 1; j-= 1;
    }
    return true;
}

fun check(arr : Array<Array<Int>>) : Boolean {
    if(arr[0][0] + arr[1][0] + arr[2][0] != 15) return false;
    if(arr[0][1] + arr[1][1] + arr[2][1] != 15) return false;
    if(arr[0][2] + arr[1][2] + arr[2][2] != 15) return false;
    if(arr[0][0] + arr[0][1] + arr[0][2] != 15) return false;
    if(arr[1][0] + arr[1][1] + arr[1][2] != 15) return false;
    if(arr[2][0] + arr[2][1] + arr[2][2] != 15) return false;
    if(arr[0][0] + arr[1][1] + arr[2][2] != 15) return false;
    if(arr[0][2] + arr[1][1] + arr[2][0] != 15) return false;
    return true;
}

fun main(args: Array<String>) {
    var board = Array<Array<Int>>(3) {Array<Int>(3) {0}}
    var number = intArrayOf(1,2,3,4,5,6,7,8,9);
    var answer = 100000;
    var sc = Scanner(System.`in`)
    for(i in 0..2) {
        for(j in 0..2) {
            board[i][j] = sc.nextInt();
        }
    }
    do {
        var magic = Array<Array<Int>>(3) {Array<Int>(3) {0}}
        var index = 0;
        for(i in 0..2) {
            for(j in 0..2) {
                magic[i][j] = number[index++];
            }
        }
        var sum = 0;
        if(check(magic)) {
            for(i in 0..2) {
                for(j in 0..2) {
                    sum += abs(magic[i][j] - board[i][j]);
                }
            }
            answer = min(sum, answer);
        }
        
    
    }while(Next_Permutation(number, 9));
    
    print(answer);
}
