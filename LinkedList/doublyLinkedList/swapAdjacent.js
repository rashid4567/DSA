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
    swapAdjacent(){
        if(!this.head || !this.head.next){
            console.log("it is empty");
            return;
        }

        let current = this.head;

        while(current && current.next){
            let first = current;
            let second = current.next;

            if(first.prev){
                first.prev.next = second;
            }else{
                this.head = second;
            }

            let nextNode = second.next;
            second.prev = first.prev;
            second.next = first;

            first.prev = second;
            first.next = nextNode;

            if(nextNode){
                nextNode.prev = first;
            }else{
                this.tail = first;
            }

            current = nextNode
        }
    }

    print(){
        if(!this.head){
            console.log("it is empty");
            return;
        }

        let out = ` HEAD <=> `;
        let current = this.head;
        while(current){
            out += ` ${current.data} <=> `;
            current = current.next;
        }

        console.log(` ${out} <=> null`)
    }
}


let dll = new DLL();
dll.addNode(5);
dll.addNode(7);
dll.addNode(3);
dll.addNode(2);
dll.addNode(7);
dll.addNode(5);
dll.addNode(2);
dll.print();


console.log("\nSwapped Data");
dll.swapAdjacent();
dll.print()