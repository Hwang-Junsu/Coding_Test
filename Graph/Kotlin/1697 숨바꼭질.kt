import java.util.*
import kotlin.math.*


var graph = Array<ArrayList<Int>>(200001) { ArrayList() }
var visited = Array<Int>(200001) { -1 }
var n = 0; var k = 0

fun bfs(start : Int) {
    
    var queue = LinkedList<Int>()
    queue.add(start); visited[start] = 0;
    
    while(queue.isEmpty() == false) {
        var v = queue.poll();
        for(to in graph[v]) {
            if(visited[to] == -1) {
                visited[to] = visited[v] + 1
                queue.add(to)
            }
        }
    
    }
}


fun main(args: Array<String>) {
    var sc = Scanner(System.`in`)
    n = sc.nextInt(); k = sc.nextInt()
    
    for(i in 0..100000) {
        if(i!=0) graph[i].add(i-1)
        graph[i].add(i+1)
        graph[i].add(i*2)
    }
    bfs(n)
    print(visited[k])
    
}
