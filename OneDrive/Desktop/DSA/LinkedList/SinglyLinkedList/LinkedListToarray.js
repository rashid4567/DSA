class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
let head = null
function addNod(data){
    let newNode = new Node(data)
    if(head === null){
        head = newNode
        return
    }
    let current = head;
    while(current.next !== null ){
        current = current.next;
        
    }
    current.next = newNode
}
function linkedListToarray(head){
 let current =head;
 let result = [];
 while(current !== null){
     result.push(current.data);
     current = current.next;
 }
 return result
}


addNod(12)
addNod(32);
addNod(14);
addNod(94);
console.log(linkedListToarray(head));