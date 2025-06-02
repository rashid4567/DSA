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
        if(this.head === null && this.head.next === null){
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
            let newNode = new Node(data);
            newNode.next = slow;
            if(slow !== null){
                prev.next = newNode;
            }else{
                this.head = newNode
            }
            console.log(`The data ${data} is the middle of the ${slow.data}`)
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