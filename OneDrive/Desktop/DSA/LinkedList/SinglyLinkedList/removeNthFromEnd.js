class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode;
    }
    NthFromend(n){
        if(!this.head && n <0)return null;
        let dummy = new Node(0);
        dummy.next = this.head;
        let fast = dummy;
        let slow = dummy;

        for(let i=0; i<=n; i++){
            if(!fast){
                console.log('The n is larger than the limit of the linked list');
            return
            }
            fast = fast.next
        }
        while(fast){
            slow = slow.next;
            fast = fast.next;
        }
        if(slow.next){
            slow.next = slow.next.next
        }
        this.head = dummy.next
    }
    display(){
        if(!this.head){
            console.log("The linked list is empty");
            return;
        }
        let current = this.head;
        let out = 'HEAD';
        while(current){
            out += ` -> [${current.data}]`
            current = current.next
        }
        console.log(` ${out} -> NULL`)
    }
}

     let LL = new LinkedList();
     LL.addNode(41);
     LL.addNode(42);
     LL.addNode(41);
     LL.addNode(43);
     LL.addNode(44);
     LL.addNode(42);
     LL.addNode(44);
     LL.NthFromend(4);
     LL.display()