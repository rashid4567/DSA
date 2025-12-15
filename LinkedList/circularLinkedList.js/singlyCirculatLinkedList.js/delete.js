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
    delete(data){
        if(!this.head)return;
        let current = this.head;
        let prev = null;
        while(current.data === data){
            if(current.next === this.head){
                this.head = null;
                return
            }
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next
            }
            temp.next = this.head.next;
            this.head = this.head.next;
            return;
        }
        prev = current;
        current = current.next;
        while(current !== this.head){
            if(current.data === data){
                prev.next = current.next;
                return
            }
            prev = current;
            current = current.next
        }
        console.log("The value is not found ")
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
CLL.delete(36)
CLL.display(10)