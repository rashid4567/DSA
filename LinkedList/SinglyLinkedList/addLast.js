//add Last
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = null;
function LastAdd(data){
    let newNode = new Node(data);
    if(head === null){
        head = newNode;
        return
    }
    let current = head
    while(current.next !== null){
        current.next = newNode
    }
}
function display(){
    let current = head;
    if(current === null){
        console.log("Linked List is empty")
        return
    }
    while(current !== null){
        console.log(current.data)
        current = current.next
    }
}
LastAdd(10)
LastAdd(14)
LastAdd(16)
display()