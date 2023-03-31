class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    // 위에서 만든 PriorityQueue 클래스로 nodes 인스턴스를 만들고, start를 추가한다.
    const nodes = new PriorityQueue();
    nodes.enqueue(start, 0);
    // distances 객체는 시작점부터 그 노드까지 최단 거리를 기록한다.
    const distances = {};
    // previous 객체는 그 노드까지 최단거리로 경유해온 직전 노드를 기록한다.
    const previous = {};
    // path 배열은 마지막에 return할 것이다.
    const path = [];
    let smallest;
    // 다음과 같은 초기 상태를 만들기 위해 for문을 돌린다.
    // distances { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
    // previous { A: null, B: null, C: null, D: null, E: null, F: null }
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        // 아래의 while문에서 처음에 nodes로부터 dequeue할 초깃값 추가하기
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    // 무한 루프를 돌린다.
    while (true) {
      // nodes 내부에서는 우선순위 정렬이 되어 있어 dequeue시 우선순위가 가장 높은(여기서는 최소 거리) 값을 주며, 그 값의 노드명을 smallest 변수에 재할당한다.
      smallest = nodes.dequeue().val;
      // dequeue한 값이 finish와 같으면 목적지에 도착한 것이므로,
      if (smallest === finish) {
        // return할 값을 아래의 while문을 통해 만들고 상위 while문을 break한다.
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // dequeue한 값이 finish와 같지 않으면,
      else {
        // dequeue한 노드와 간선으로 이어진 노드들에 대하여 아래 과정의 반복문을 돌린다.
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          // 시작점에서 현 노드까지 경유한 거리(distances[smallest])와
          // 현 노드와 다음 노드 사이의 거리(nextNode.weight)를 합하여 최소거리 후보로 둔다.
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          // 시작점에서 다음 노드까지 가장 짧은 거리를 구하기 위해,
          // 방금 만든 후보 값과 기존에 저장된 거리값을 비교하여, 후보 값이 더 작으면,
          if (candidate < distances[nextNeighbor]) {
            // 새로운 최소 거리 값으로 업데이트한다.
            distances[nextNeighbor] = candidate;
            // 다음 노드로 가기 위해 직전에 들린 노드를 기록한다.
            previous[nextNeighbor] = smallest;
            // 다음 노드와 그곳까지 걸린 거리(priority)를 nodes에 넣는다.
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "F"));

/* 
다익스트라 의사코드

1. 그래프에 대해 함수를 정의하고 가중 그래프 클레스에 대한 메소드로 정의합니다.
2. 시작 정점과 끝 지점 하나를 입력합니다.
3. distance 객체를 만들어 정점에 대한 가장 짧은 거리를 저장합니다. (처음 거리는 무한으로 설정)
4. 모든 값들을 distances 객체 안에서 설정한 뒤 우선순위 큐를 만듭니다. 각 정점을 우선순위 큐에 저장합니다.
우선순위는 A로 부터의 거리. 초기에는 모든 정점의 우선 순위가 무한으로 설정
5. previouse 객체를 생성합니다. 모든 정점에 대해 null로 초기값을 설정합니다.
6. 우선순위 큐에 값이 있으면 반복문을 돌립니다.
7. 새로운 거리의 최소 값이 있다면 distance객체외 previouse 객체를 수정해 줍니다.

*/
