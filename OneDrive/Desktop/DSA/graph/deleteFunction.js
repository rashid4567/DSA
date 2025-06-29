class Graph{
    constructor(isDirect = false){
        this.adjList = {};
        this.isDirect = isDirect;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }
    addEdge(v1, v2){
        this.addVertex(v1);
        this.addVertex(v2);
        
        this.adjList[v1].add(v2);
        if(!this.isDirect){
            this.adjList[v2].add(v1)
        }
    }
    removeVertex(vertex){
       if(!this.adjList[vertex])return;

       for(let v in this.adjList){
            this.adjList[v].delete(vertex)
       }
       delete this.adjList[vertex]
    }
    removeEdge(v1,v2){
        if(this.adjList[v1]){
            this.adjList[v1].delete(v2)
        }
        if(!this.isDirect && this.adjList[v2]){
            this.adjList[v2].delete(v1)
        }
    }
    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex} -> ${[...this.adjList[vertex]].join(", ")}`)
        }
    }
}
const g = new Graph(true);

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("C", "A");

console.log("Original Graph:");
g.print();

g.removeEdge("A", "C");
console.log("\nAfter Removing Edge A → C:");
g.print();

g.removeVertex("B");
console.log("\nAfter Removing Vertex B:");
g.print();
