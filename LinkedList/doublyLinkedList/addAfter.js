class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
            return
        }else{
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
    }
    addValue(data, target){
       if(!this.head)return null;
       let current = this.head;
       while(current){
           if(current.data === target){
               let newNode = new Node(data);
               newNode.next = current.next;
               newNode.prev = current
               if(current.next){
                   current.next.prev =newNode;
               }else{
                   this.tail = newNode;
               }
               current.next = newNode;
           }
           current = current.next
       }
       console.log(`The ${data} is added after the target of ${target}`)
    }
    display(){
        if(!this.head){
            console.log("The linked list is empty");
            return;
        }
        let current = this.head;
        let out = 'HEAD'
        while(current){
            out += ` <—> ${current.data}`;
            current = current.next
        }
        console.log(` ${out} <—> NULL`);
    }
}
let LL = new LinkedList();
LL.addNode(23);
LL.addNode(24);
LL.addNode(25);
LL.addNode(26);
LL.addNode(27);
LL.addValue(25,24)
LL.display()    