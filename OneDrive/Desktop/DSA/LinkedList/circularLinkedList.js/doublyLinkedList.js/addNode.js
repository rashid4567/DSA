class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
        
    }
}


class DoublyCircularLinkedList{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data)
            if(!this.head){
                this.head = newNode;
                newNode.next = newNode;
                newNode.prev = newNode;
                return;
            }
            let tail = this.head.prev;
            tail.next = newNode;
            newNode.prev = tail
            newNode.next = this.head;
            this.head.prev = newNode;
    }
    display(limit){
        if(!this.head){
            console.log("The linked list is empty");
            return;
        }
        let result = "The circular linked list \nHEAD";
        let current = this.head;
        let count = 0;
        do{
            result += ` <=> [${current.data}]`;
            current = current.next;
            count++
        }while(current !== this.head && count < limit)
        console.log(` ${result} <=> HEAD <=> (start from the HEAD)`)
    }
    
}

let DCLL =  new DoublyCircularLinkedList();
DCLL.addNode(34);
DCLL.addNode(35);
DCLL.addNode(36);
DCLL.addNode(37);
DCLL.addNode(38);
DCLL.addNode(39);
DCLL.display(10)
