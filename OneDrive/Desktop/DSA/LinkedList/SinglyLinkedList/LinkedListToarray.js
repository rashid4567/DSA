class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode;
    }
    toArray(){
        if(!this.head)return null;
        let result = [];
        let current = this.head;
        while(current){
            result.push(current.data);
            current = current.next
        }
        return result
    }
    display(){
        if(!this.head){
            console.log("The list is empty");
            return;
        }
        let current = this.head;
        let out = 'HEAD'
        while(current){
            out += ` -> [${current.data}] `
            current = current.next
        }
        console.log(` ${out} -> NULL`)
    }
}

let LL = new LinkedList();
LL.addNode(23);
LL.addNode(24);
LL.addNode(25);
LL.addNode(26);
LL.addNode(27);
LL.addNode(28);
LL.addNode(29);
let r = LL.toArray();
console.log(r)
LL.display()