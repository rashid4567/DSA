class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null
    }
    addNode(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode;
    }
    addAfterValue(target,data){
        if(this.head === null)return false;
    
    let current = this.head
    while(current !== null && current.data !== target){
        current = current.next
    }
    if(current === null){
        console.log(`The ${target} is not found in the linked list`)
        return
    }
    let newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode
    console.log(`The ${data} is added after the value ${target}`)
}
    
    display(){
        if(this.head == null){
            console.log("Linked list is empty")
        }
        let current =this.head;
        let out = "head ";
        while(current !== null){
            out += `-> ${current.data}`;
            current = current.next;
        }
        console.log(`${out} -> null`)
        
    }
}

let SLL =new  SinglyLinkedList();
SLL.addNode(22);
SLL.addNode(21);
SLL.addNode(12);
SLL.addNode(43);
SLL.addNode(41);
SLL.addNode(16);
SLL.addNode(43);
SLL.addNode(44);
SLL.addNode(43);
SLL.addNode(13);
SLL.addNode(22);
SLL.addAfterValue(16,332);
SLL.display()    