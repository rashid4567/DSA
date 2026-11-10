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

        if(!Number.isInteger(n) || n <= 0){
            console.log("N should be a positive integer");
            return;
        }

        let dummy = new Node(0);
        dummy.next = this.head;

        let fast = dummy;
        let slow = dummy;

        for(let i=0; i<n; i++){
            if(!fast.next){
                console.log(`N should not be greater than the length of the list`);
                return;
            }

            fast = fast.next;
        }

        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        this.head = dummy.next;

        return this.head;
        
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