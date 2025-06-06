    class Node{
    constructor(data){
        this.data = data;
        this.prev = null
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = this.tail = newNode;
            return
        }
       this.tail.next = newNode;
       newNode.prev = this.tail;
       this.tail = newNode;
    }
    removeFirst(){
        if(!this.head)return false;
        let value = this.head.data;
        if(this.head === this.tail){
            this.head = this.tail = null;
            return
        }else{
             this.head = this.head.next;
            this.head.prev = null
        }
        return value
        
    }
    display(){
        if(this.head === null){
            console.log("Linked list is empty");
            return
        }
        let current = this.head;
        let out = "head -->"
        while(current !== null){
            out += ` [${current.data}] <-->`
            current = current.next;
        }
        out += " null"
        console.log(out)
    }
}

let DDL = new DoublyLinkedList();
DDL.addNode(25)
DDL.addNode(24)
DDL.addNode(23)
DDL.addNode(22)
DDL.addNode(21)
DDL.removeFirst(20);
DDL.display()