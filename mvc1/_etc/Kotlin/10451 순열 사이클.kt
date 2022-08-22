import java.util.Scanner
import java.util.*


var n: Int = 0
var graph = Array<ArrayList<Int>>(1001) {ArrayList<Int>()}
var visited = Array<Boolean>(1001) { false };


fun bfs(start : Int): Boolean {
    if(visited[start] == true) return false
    var queue = LinkedList<Int>()
    queue.add(start); visited[start] = true
    
    while(queue.isEmpty() == false) {
        val v = queue.peek();
        queue.poll();
        for(x in graph[v]) {if(visited[x] == false) {queue.add(x); visited[x] = true}}
    }
    
    return true
}


fun init() {
    for(i in 0 until graph.size) {graph[i].clear()}
    visited.fill(false, 0, visited.size)
}


fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    var t = sc.nextInt()
    
    while(t-- > 0) {
        var answer = 0
        n = sc.nextInt()
        for(from in 1..n) {
            var to = sc.nextInt()
            graph[from].add(to); graph[to].add(from)
        }
        
        for(i in 1..n) {
            if(bfs(i)) answer += 1
        }
    
        
        
        println(answer)
        init()
    }

}
