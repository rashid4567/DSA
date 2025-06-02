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
    findMiddle(data){
        if(this.head === null){
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }
        let fast = this.head;
        let slow = this.head;
        while(fast !== null && fast.next !== null){
          fast = fast.next.next;
          slow = slow.next
        }
          let newNode = new Node(data);
            newNode.next = slow.next;
            slow.next = newNode
        console.log(`The data ${data} is added in the after of the middle of the linked list the middle is ${slow.data}`)
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
SLL.findMiddle(4);
SLL.display()