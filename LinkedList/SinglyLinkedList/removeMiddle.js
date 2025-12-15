class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class singlyLinkedList{
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
    deleteMiddle(){
        if(!this.head)return null;
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log('The mid of the linked list is :- ', slow.data)
        if(prev){
            prev.next = slow.next
        }
    }
    display(){
        if(!this.head){
            console.log("The linked list is empty");
            return
        }
        let current = this.head;
        let out = 'HEAD';
        while(current){
            out += ` -> ${current.data}`
            current = current.next;
        }
        console.log(` ${out} -> NULL`)
    }
}

let SLL = new singlyLinkedList();
SLL.addNode(23);
SLL.addNode(24);
SLL.addNode(25);
SLL.addNode(26);
SLL.addNode(27);
SLL.addNode(28);
SLL.addNode(29);
SLL.deleteMiddle();
SLL.display()