//search a node
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
let head = null;
function addNode(data){
    let newNode = new Node(data);
    if(head === null){
        head = newNode;
        return;
    }
    let current = head;
    while(current.next !== null){
        current = current.next
    }
    current.next = newNode;
}
function searchNode(target){
    let current = head;
    while(current !== null){
        if(current.data === target){
             return true
        }
        current = current.next
    }
    return false;
}
addNode(23)
addNode(24)
addNode(25)

console.log(searchNode(23))
