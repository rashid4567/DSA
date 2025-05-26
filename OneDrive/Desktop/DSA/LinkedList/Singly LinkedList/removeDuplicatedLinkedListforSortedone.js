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
     let current =this.head;
     while(current !== null && current.next !== null){
        if(current.data === current.next.data){
            current.next = current.next.next
        }else{
            current = current.next
        }
        
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