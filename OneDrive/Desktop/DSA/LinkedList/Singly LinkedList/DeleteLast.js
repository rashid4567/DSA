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
    let current = head
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
}
function deleteLast(){
    if(head === null)return;
    if(head.next === null){
        head = null;
        return
    }
    let current = head;
    while(current.next.next !== null){
        current = current.next
    }
    current.next = null
}

function display(){
    if(head === null){
        console.log("Linked list is empty")
    }
    let current = head;
    while(current !== null){
        console.log(current.data)
        current = current.next
    }
}
addNode(12)
addNode(22)
addNode(32)
addNode(42)
deleteLast()
display()