//find the count of the linked list
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
function countdisplay(){
    let count =0;
    let current = head
    while(current !== null){
        count++;
        current = current.next
    }
    console.log(`The count of the LINKED LIST is ${count}`)
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

addNode(23)
addNode(22)
addNode(23)
addNode(231)

countdisplay()
display()
