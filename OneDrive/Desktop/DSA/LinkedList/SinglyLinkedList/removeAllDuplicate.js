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
       let newNode = new Node(data);
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
   removeDuplicates(){
   let current = this.head;
   while(current !== null){
       let runner = current;
       while(runner.next !== null){
           if(runner.next.data === current.data){
               runner.next = runner.next.next
           }else{
               runner = runner.next
           }
       }
       current = current.next
   }
}
  display(){
    if(this.head === null)return false;
    let current = this.head;
    let out= "head"
    while(current !== null){
        out += `-> ${current.data}`
        current = current.next
    }
    console.log(`${out} -> null`)
}
}
const list = new singlyLinkedList();
list.addNode(23);
list.addNode(23);
list.addNode(45);
list.addNode(65);
list.addNode(65);
list.addNode(23);
list.removeDuplicates();
list.display();