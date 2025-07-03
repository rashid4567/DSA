class Graph {
    constructor(isDirected = false) {
        this.adjList = {};
        this.isDirected = isDirected;
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }
    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        this.adjList[v1].add(v2);
        if (!this.isDirected) {
            this.adjList[v2].add(v1);
        }
    }
    deleteEdge(v1, v2) {
        if (this.adjList[v1]) {
            this.adjList[v1].delete(v2);
        }
        if (!this.isDirected && this.adjList[v2]) {
            this.adjList[v2].delete(v1);
        }
    }
    deleteVertex(vertex) {
        if (!this.adjList[vertex]) return;
        for (let otherVertex in this.adjList) {
            this.adjList[otherVertex].delete(vertex);
        }
        delete this.adjList[vertex];
    }
    printGraph() {
        for (let vertex in this.adjList) {
            console.log(vertex, '->', [...this.adjList[vertex]]);
        }
    }
}
const g = new Graph(false); 

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("D", "E");

console.log("🌐 Original Graph:");
g.printGraph();

g.deleteEdge("A", "B");
console.log("\n🗑️ After deleting edge A-B:");
g.printGraph();

g.deleteVertex("D");
console.log("\n🗑️ After deleting vertex D:");
g.printGraph();
