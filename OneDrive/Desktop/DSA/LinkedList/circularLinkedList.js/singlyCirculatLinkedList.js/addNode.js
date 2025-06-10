class Node{
    constructor(data){
        this.data =data;
        this.next = null
    }
}
class circularLinkedList{
    constructor(){
        this.head = null
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
            return
        }
        let current = this.head;
        while(current.next !== this.head){
            current = current.next
        }
        current.next = newNode;
        newNode.next = this.head
    }

    display(limit){
        if(!this.head){
            console.log("THe list is empty");
            return
        }
        let result = "THE circular linked list \n";
        let current = this.head;
        let count = 0;
       do{
            result += ` -> [${current.data}] `;
            current = current.next;
            count++;
        } while(current !== this.head && count < limit)
        console.log(` ${result} -> HEAD -> (start from the HEAD)`)
    }
}

let CLL = new circularLinkedList();
CLL.addNode(34);
CLL.addNode(35);
CLL.addNode(36);
CLL.addNode(37);
CLL.addNode(38);
CLL.addNode(39);
CLL.display(10)