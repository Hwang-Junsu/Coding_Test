import java.util.*;


var graph = ArrayList<ArrayList<Int>>();

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

fun dfs(v : Int, w : Int) : Boolean {
    for(to in graph.get(v)) {
        if(to == w) return false;
    }
    return true;
}

fun main(args: Array<String>) {
    val sc = Scanner(System.`in`);
    
    val n = sc.nextInt(); val m = sc.nextInt();
    for(i in 0..n) graph.add(ArrayList<Int>())
    for(i in 0 until m) {
        val f = sc.nextInt(); val t = sc.nextInt();
        graph.get(f).add(t); graph.get(t).add(f);
    }
    
    var index = IntArray(n, {0});
    for(i in n-3 until n) index[i] = 1;
    for(i in 0 until n-3) index[i] = 0;
    var ice = ArrayList<Int>();
    for(i in 0 until n) ice.add(i+1);
    var answer = 0;
    do {
        var combi = ArrayList<Int>();
        for(i in 0 until n) {
            if(index[i] == 1) combi.add(ice[i]);
        }
        var can = true;
        loop@ for(i in 0 until 3) {
            for(j in i+1 until 3) {
                if(!dfs(combi.get(i), combi.get(j))) {
                    can = false; break@loop;
                }
            }
        }
        
        if(can) answer++;
        
    
    } while(Next_Permutation(index, n));
    
    print(answer);
}
