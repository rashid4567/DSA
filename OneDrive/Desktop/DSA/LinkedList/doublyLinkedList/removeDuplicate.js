class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail= newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    removeDuplicate(){
        if(!this.head)return null;
        let current = this.head;
        while(current){
            let runner = current.next;
            while(runner){
                if(runner.data === current.data){
                    let nextRunner = runner.next;
                    let prevRunner = runner.prev;
                    if(nextRunner) nextRunner.prev = prevRunner;
                    if(prevRunner) prevRunner.next = nextRunner;
                    if(runner === this.tail) this.tail = prevRunner
                }
                    runner = runner.next
                
            }
            current = current.next
        }
    }
    display(){
        if(!this.head){
            console.log('THe linked list is empy+ty');
            return;
        }
        let current = this.head;
        let out = "HEAD"
        while(current){
            out +=` <=> ${current.data}`
            current = current.next
        }
        console.log(` ${out} <=> NULL`)
    }
}


let LL = new LinkedList();
LL.addNode(45);
LL.addNode(46);
LL.addNode(47);
LL.addNode(45);
LL.addNode(49);
LL.addNode(44);
LL.removeDuplicate();
LL.display() 