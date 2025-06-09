class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    secondLast(){
        if(!this.head || !this.head.next){
            console.log("The node doesn't have a secondLa");
            return
        }
        let current = this.head;
        while(current.next && current.next.next){
            current = current.next
        }
        console.log(`The second last of the linked list is ${current.data}`)
        return;
    }
    display(){
        if(!this.head){
            console.log('The list is empty');
            return;
        }
        let current = this.head;
        let out = 'HEAD'
        while(current){
            out += ` -> [${current.data}] `;
            current = current.next
        }
        console.log(`${out} -> NUL`)
    }
}
let SLL = new singlyLinkedList();
SLL.addNode(34)
SLL.addNode(35)
SLL.addNode(36)
SLL.addNode(37)
SLL.addNode(38)
SLL.addNode(39)
SLL.addNode(34)
SLL.secondLast();
SLL.display()
