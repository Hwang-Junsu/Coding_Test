import java.util.Scanner
import java.util.*


var n: Int = 0
var m: Int = 0
var v: Int = 0
var graph = Array<ArrayList<Int>>(1001) {ArrayList<Int>()}
var visited = Array<Boolean>(1001) { false };


fun bfs(start : Int) {
    var queue = LinkedList<Int>()
    queue.add(start); visited[start] = true
    print("${start} ")
    
    
    while(queue.isEmpty() == false) {
        val v = queue.peek();
        queue.poll();
        for(x in graph[v]) {if(visited[x] == false) {queue.add(x); print("${x} "); visited[x] = true}}
    }
}

fun dfs(v : Int) {
    if(visited[v]) return
    
    visited[v] = true
    print("${v} ")
    for(n in graph[v]) dfs(n)
}


fun init() {
    visited.fill(false, 0, visited.size)
}


fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    n = sc.nextInt()
    m = sc.nextInt()
    v = sc.nextInt()
    
    for(i in 0 until m) {
        var from = sc.nextInt(); val to = sc.nextInt()
        graph[from].add(to); graph[to].add(from)
    }
    
    for(i in 0 until graph.size) {graph[i].sort()}
    
    dfs(v)
    init()
    bfs(v)

}
