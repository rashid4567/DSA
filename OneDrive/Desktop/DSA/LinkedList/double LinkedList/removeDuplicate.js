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
    removeallduplicate(){
        let current = this.head;
        while(current){
            let runner = current.next;
            while(runner){
                let nextRunner = runner.next
                if(runner.data === current.data){
                    if(runner.next) runner.next.prev = runner.prev;
                    if(runner.prev) runner.prev.next =runner.next
                    if(runner === this.tail){
                        this.tail = runner.prev
                    }
                }
                runner = nextRunner
                
            }
            current = current.next
        }
    }
    display(){
        if(this.head === null){
            console.log("Linked list is empty");
            return
        }
        let current = this.tail;
        let out = "head -->"
        while(current !== null){
            out += ` [${current.data}] <-->`
            current = current.prev;
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
DDL.addNode(25)
DDL.removeallduplicate();
DDL.display()