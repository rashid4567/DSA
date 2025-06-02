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
        
        addData(data){
          let newNode = new Node(data);
            if(this.head === null){
                this.head = newNode;
                return
            }
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode;
        }
        DeleteLast(){
            if(this.head === null){
                console.log("The linked list is empty")
                return;
            }
            if(this.head.next === null){
                this.head = null;
                return
            }
            let current = this.head;
            let prev = null;
            while(current.next !== null){
                prev = current;
                current = current.next
            }
            prev.next = null
        }
       
        Display(){
            if(this.head === null){
                console.log("The linked list is empty")
                return
            }
            let current = this.head;
            let out = 'head';
            while(current !== null){
                out += `-> ${current.data}`;
                current = current.next
            }
            console.log(`${out} -> null`)
        }
    }
    let SSL = new SinglyLinkedList();
    SSL.addData(23);
    SSL.addData(21);
    SSL.addData(20);
    SSL.addData(19);
    SSL.addData(17);
    SSL.addData(13);
    SSL.DeleteLast();
    SSL.Display();