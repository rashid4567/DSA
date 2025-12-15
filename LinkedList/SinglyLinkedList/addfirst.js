

//add First
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = null;
function addData(data){
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
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
addData(13)
addData(23)
addData(33)
addData(43)
addData(53)
addData(63)

display()








