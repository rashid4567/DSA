class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    getFirst(){
        if(!this.head){
            console.log("it is empty");
            return
        }
        return this.head.data
    }
    getLast(){
        if(!this.tail){
            console.log("it is empty");
            return
        }
        return this.tail.data
    }
    print(){
        if(!this.head){
            console.log("it is empty")
            return
        }
        let current = this.head
        let out = `head `;
        while(current){
            out += ` ${current.data} -> `;
            current = current.next
        }
        console.log(` ${out} -> Null`)
    }
}


let s = new SLL();
s.addNode(4);
s.addNode(5);
s.addNode(6);
s.addNode(7);
s.addNode(8);
s.addNode(9);
s.addNode(2);
s.print()
console.log(s.getFirst())
console.log(s.getLast())
