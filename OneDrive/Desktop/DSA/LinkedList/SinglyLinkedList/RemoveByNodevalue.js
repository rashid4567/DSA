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
        return;
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
}
function removeNodeByValue(value){
    if(head === null)return;
    if(head.data === value){
        head = head.next;
        return
    }
    let current =head;
    let prev = null;
    while(current !== null && current.data !== value){
        prev = current;
        current = current.next;
    }
    if(current == null)return;
    
    prev.next = current.next
}

function display(){
    if(head === null){
        console.log("Linked list is empty");
        return;
    }
    let current = head;
    let out = 'head';
    while(current !== null){
        out += ` -> ${current.data}`;
        current = current.next;
    }
    out += ' -> null';
    console.log(out);
}


addNode(32);
addNode(33);
addNode(34);
addNode(35);
removeNodeByValue(33);
display()