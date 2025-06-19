
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
let head = null;
function addNode(data){
    let newNode = new Node(data)
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
function removePointer(pos){
    if(head === null || pos < 0) return;
    if(pos === 0){
        head = head.next
        return
    }
    let current =head;
    let prev = null;
    let count =0;
    while(current !== null && count < pos){
        prev =current
        current = current.next
        count++
    }
    if(!current) return
    prev.next = current.next
}
function display(){
    if(head === null){
        console.log("Linked list is empty")
return
    }
    let current = head;
    while(current !== null){
        console.log(current.data)
        current = current.next;
    }
}

addNode(23);
addNode(21);
addNode(52);
addNode(31);
removePointer(2)
display()