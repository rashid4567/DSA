// Find the Middle Node (Two-pointer technique)


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
        head = newNode
        return
    }
    let current = head;
    while(current.next !== null){
        current = current.next
    }
    current.next = newNode
}
function findPointer(){
    if(head === null)return false;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next
    }
    console.log(`The middle of the linked list is ${slow.data}`)
}
addNode(10);
addNode(20);
addNode(30);
addNode(40);
addNode(50);
addNode(60);
findPointer();  
