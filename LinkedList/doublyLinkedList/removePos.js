class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
                
    }
    removePos(pos){
        if(!this.head){
            console.log("it is empty");
            return;
        }
        
        if(pos < 0){
            console.log("Position shouldn't lesser than 0");
            return;
        }
        let current = this.head;
        let count = 0;

        while(current && count < pos){
            current = current.next;
            count++
        }

        if(!current){
            console.log("The position is not in the list");
            return;
        }

        let nextNode = current.next;
        let prevNode = current.prev;
        if(nextNode){
            nextNode.prev = prevNode;
        }else{
            this.tail = prevNode
        }
        if(prevNode){
            prevNode.next = nextNode;
        }else{
            this.head = nextNode;
        }

        current.next = null;
        current.prev = null
    }

    display(){
        if(!this.head){
            console.log("It is empty");
            return;
        }

        let out = " head <=> ";
        let current = this.head;
        while(current){
            out += ` ${current.data} <=> `;
            current = current.next;
        }
        console.log(` ${out}  null`)
    }
}


let dll = new DLL();

dll.addNode(10);
dll.addNode(20);
dll.addNode(30);
dll.addNode(40);
dll.addNode(50);

dll.display();

dll.removePos(0);
dll.display();

dll.removePos(2);
dll.display();

dll.removePos(1);
dll.display();

dll.removePos(0);
dll.display();

dll.removePos(0);
dll.display();