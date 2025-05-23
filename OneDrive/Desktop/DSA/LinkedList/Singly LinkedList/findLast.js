class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = null
function addNode(data){
    let newNode = new Node(data)
    if(head === null){
        head = newNode;
        return
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
}
function findLast(){
    if(head === null){
        console.log("Linked list is empty")
        return
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    console.log(current.data)
}

addNode(34)
addNode(21);
addNode(64);
addNode(46);
findLast()