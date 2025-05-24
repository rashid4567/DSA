class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = null;
function addNode(data){
    let newNode = new Node(data);
    if(head === null){
        head = newNode;
        return
    }
    let current = head;
    while(current.next !== null){
        current = current.next
    }
    current.next = newNode;
}
function deleteNode(){
    if(head === null) return
    head = head.next
}
function display(){
    if(head === null){
        console.log('Linked list is empty')
        return
    }
    let current = head;
    while(current !== null){
        console.log(current.data)
        current = current.next;
    }
}
    
addNode(32);
addNode(12);
addNode(22);
addNode(42);
addNode(52);
addNode(62);
deleteNode();
display()