class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current =this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    ispalidrome(){
        if(!this.head || !this.head.next)return true;
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null;
        while(slow){
            let next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        let left = this.head;
        let right = prev;
        while(right){
            if(left.data !== right.data)return false;
            left = left.next;
            right = right.next;
        }
        return true
    }
    display(){
        if(!this.head){
            console.log("The list is empty");
            return false;
        }
        let current = this.head;
        let out = `HEAD`
        while(current){
            out += `-> [${current.data}]`;
            current = current.next
        }
        console.log(` ${out} -> NULL`)
    }
}

let SLL =new SinglyLinkedList();
SLL.addNode(23);
SLL.addNode(24);
SLL.addNode(25);
SLL.addNode(26);
SLL.addNode(27);
SLL.addNode(28);
SLL.addNode(29);
const result = SLL.ispalidrome();
console.log("Is Palindrome ? :", result);
SLL.display()