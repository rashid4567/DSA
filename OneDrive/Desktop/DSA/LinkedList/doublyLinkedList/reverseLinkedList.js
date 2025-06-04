class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.prev = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(this.head === null){
          this.head = this.tail = newNode
        }else{
             this.tail.prev = newNode;
           newNode.prev = this.tail;
           this.tail = newNode
        }
    }
    reverse(){
        if(this.head === null){
            console.log("The list is empty");
            return;
        }
        let current = this.tail;
        let out = `Reversed : Tail <->`
        while(current  !== null){
            out += ` <-> ${current.data} `
            current = current.prev
        }
        console.log(`${out} <-> HEAD`)
    }
}

let DLL = new DoublyLinkedList();
DLL.addNode(32);
DLL.addNode(31);
DLL.addNode(38);
DLL.addNode(37);
DLL.addNode(33);
DLL.addNode(33);
DLL.reverse()