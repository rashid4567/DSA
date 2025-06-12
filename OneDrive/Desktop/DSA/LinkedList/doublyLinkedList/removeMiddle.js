    class Node{
        constructor(data){
            this.data = data;
            this.prev = null;
            this.next = null
        }
    }
    class DoublyLinkedList{
        constructor(){
            this.head = null;
            this.prev = null;
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
        removeMiddle(){
            if(!this.head || !this.head.next)return null;

            let fast = this.head;
            let slow = this.head;
            while(fast && fast.next){
                slow = slow.next;
                fast = fast.next.next;
            }
            if(slow.prev){
                slow.prev.next = slow.next
            }else{
                this.head = slow.next
            }
            if(slow.next){
                slow.next.prev = slow.prev
            }else{
                this.tail = slow.prev
            }
            slow.next = null;
            slow.prev = null
        }
        display(){
            if(!this.head){
                console.log("The linked list is empty");
                return 
            }
            let current = this.head;
            let out = 'HEAD'
            while(current){
                out += ` <-> [${current.data}] `;
                current = current.next
            }
            console.log(` ${out} <-> NULL`)
        }
    }

    let DLL = new DoublyLinkedList();
    DLL.addNode(34);
    DLL.addNode(35);
    DLL.addNode(36);
    DLL.addNode(37);
    DLL.addNode(38);
    DLL.addNode(39);
    DLL.addNode(31);
    DLL.removeMiddle();
    DLL.display()