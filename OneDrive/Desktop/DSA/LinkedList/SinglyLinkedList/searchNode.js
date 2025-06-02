class Node{
    constructor(data){
        this.data = data;
        this.Next = null
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
        current.next = newNode
    }
    searchNode(target){
        if(this.head === null)return;
        let current = this.head;
        let index = 0;
        let found = false;
        while(current !== null){
            if(current.data === target){
                console.log(`The Target ${target} is presend at the position of ${index}`)
                found : true
            }
        current = current.next;
        index++
        }
        if(!found){
            console.log(`The Target ${target} is not in the list`)
        }
    }
    display(){
        if(this.head === null){
            console.log("The linked list is empty")
            return;
        }
        let current = this.head;
        let out = `Head`;
        while(current !== null){
            out += ` -> ${current.data}`
            current = current.next
        }
        console.log(` ${out} -> Null`)
    }
}

let SLL =new  singlyLinkedList()
SLL.addNode(10)
SLL.addNode(11)
SLL.addNode(12)
SLL.addNode(13)
SLL.addNode(14)
SLL.addNode(15)
SLL.addNode(16)
SLL.addNode(17)
SLL.addNode(18)
SLL.searchNode(16)
SLL.display()