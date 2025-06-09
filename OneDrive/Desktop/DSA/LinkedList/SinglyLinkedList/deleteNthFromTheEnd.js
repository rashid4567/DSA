class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(data){
        this.head = null
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    deleteNthEnd(n){
        if(!this.head)return null;
        let dummy = new Node(0);
            dummy.next = this.head;
        let fast = dummy;
        let slow = dummy;
        for(let i=0; i<=n; i++){
            if(!fast.next){
        console.log(" 'n' is greater than the length of the list.");
                return
            }
            fast = fast.next
        }
        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }
        let newHead = slow.next;
        let out = 'HEAD';
        let current = newHead;
        while(current){
            out += ` -> ${current.data} `;
            current = current.next
        }
        console.log(`The linked list after the Nth to the end ${out} -> NULL`)
    }
    display(){
        if(!this.head){
            console.log("The linked list is empty");
            return;
        }
        let current = this.head;
        let out = "HEAD";
        while(current){
            out += ` -> ${current.data}`;
            current = current.next
        }
        console.log(` ${out} -> NULL`)
    }
}
let SLL = new SinglyLinkedList();
SLL.addNode(34);
SLL.addNode(35);
SLL.addNode(36);
SLL.addNode(37);
SLL.addNode(38);
SLL.addNode(39);
SLL.deleteNthEnd(3);
SLL.display()