class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    swapPairs(){
        if(!this.head || !this.head.next){
            return;
        }

        let dummy = new Node(0);
        dummy.next = this.head;

        let prev = dummy;
        
        while(prev.next && prev.next.next){
            let first = prev.next;
            let second = first.next;

            first.next = second.next;
            second.next = first;
            prev.next = second;

            prev = first;
        }

        this.head = dummy.next;
    }

    print(){
        if(!this.head){
            console.log("it is empty");
            return;
        }

        let current = this.head;
        let out = " head -> ";
        while(current){
            out += ` ${current.data} -> `;
            current = current.next;
        }
        console.log(` ${out} -> null `);
    }
}


let List = new SLL();
List.addNode(5);
List.addNode(4);
List.addNode(1);
List.addNode(7);
List.addNode(9);
List.addNode(0);
List.addNode(7);
List.addNode(5);
List.print();

console.log("SWAP PAIRS ");
List.swapPairs();
List.print()