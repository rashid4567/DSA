class Graph{
    constructor(isDirected = false){
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
        
        this.adjList[v1].add(v2)
        if(!this.isDirected){
            this.adjList[v2].add(v1)
        }
    }
  bfs(start){
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    
    while(queue.length > 0){
        const node = queue.shift();
        console.log(node);
        
        for(let n of this.adjList[node]){
            if(!visited.has(n)){
                visited.add(n);
                queue.push(n)
            }
        }
    }
}
  
    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex} -> ${[...this.adjList[vertex]].join(", ")}`)
        }
    }
}

let g = new Graph(false);
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("C", "A");
g.bfs("A")