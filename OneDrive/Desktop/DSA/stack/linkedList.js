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
    push(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    pop(){
        if(!this.head)return null;
        const popped = this.head.data;
        this.head = this.head.next;
        return popped;
    }
    peek(){
        return this.head ? this.head.data : null;
    }
    isEmpty(){
        return this.head === null;
    }
    size(){
        if(!this.head)return null;
        let count =0;
        let temp = this.head;
        while(temp){
            count++;
            temp = temp.next
        }
        return count;
    
    }
    display(){
        if(!this.head)return null;
        let current = this.head;
        let out = "HEAD";
        while(current){
            out += ` ${current.data} -> `
            current = current.next;
        }
        console.log(`${out} -> NULL`)
    }
}

let LL = new LinkedList();
LL.addNode(4);
LL.addNode(6);
LL.addNode(3);
LL.addNode(8);
LL.addNode(2);
LL.display();
console.log("size :-",LL.size());
console.log("peek :- ", LL.peek())