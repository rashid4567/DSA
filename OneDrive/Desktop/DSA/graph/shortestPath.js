class Graph{
    constructor(isDirected){
        this.adjList = {};
        this.isDirected = isDirected;
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
        if(!this.isDirected){
            this.adjList[v2].add(v1)
        }
    }
    shortestPath(start, target){
        let visited = new Set();
        const queue = [[start, 0]];

        while(queue.length > 0){
            let [node, dist] = queue.shift();
            if(node === target)return dist;

            visited.add(node);

            for(let n of this.adjList[node]){
                if(!visited.has(n)){
                    queue.push([n, dist + 1])
                }
            }
        }
        return -1;
    }
}
const g = new Graph(true);

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "A"); 
console.log(`\n📏 Shortest path from A to D: ${g.shortestPath("A", "D")}`);