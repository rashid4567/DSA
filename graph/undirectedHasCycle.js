class Graph {
  constructor(isDirected = false) {
    this.adjList = {};
    this.isDirected = false;
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdges(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList[v1].add(v2);
    if (!this.isDirected) {
      this.adjList[v2].add(v1);
    }
  }
  hasCycle() {
    let visited = {};

    const dfs = (node, parent) => {
      visited[node] = true;

      for (let neighbor of this.adjList[node]) {
        if (!visited[neighbor]) {
          if (dfs(neighbor, node)) return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    for (let vertex in this.adjList) {
      if (!visited[vertex]) {
        if (dfs(vertex, null)) {
          return true;
        }
      }
    }

    return false;
  }
}
let g = new Graph(false);
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("D", "B");
g.addEdges("B", "C");
g.addEdges("C", "A");
console.log("\n has cycle");
console.log(g.hasCycle());
