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
    addAfter(data, target){
        if(this.data === null)return;
        let current = this.head;
        while(current !== null && current.data !== target){
            current = current.next
        }
        if(current === null){
            console.log("The target is not found in the list ")
            return;
        }
        let newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode
    }
    display(){
        if(this.head === null){
            console.log("The linked list is empty")
            return;
        }
        let current = this.head;
                    let out = `HEAD `
        while(current !== null){
out += ` -> ${current.data}`
            current = current.next
        }
        console.log(`${out} -> null`)
    }
}


let SLL = new singlyLinkedList();
SLL.addNode(45);
SLL.addNode(46);
SLL.addNode(47);
SLL.addNode(48);
SLL.addNode(49);
SLL.addNode(50);
SLL.addAfter(12,48)
SLL.display()