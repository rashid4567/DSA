class Queue{
    constructor(){
        this.item =[];
        this.rear = 0;
        this.front = 0;
    }
    enQueue(element){
        this.item[this.rear] = element;
        this.rear++;
    }
    deQueue(){
        if(this.isEmpty())return "The queue is empty";
        let removed = this.item[this.front];
        this.front++;
        return removed;
    }
    peek(){
        if(this.isEmpty())return "The queue is empty";
        return this.item[this.front]
    }
    isEmpty(){
        return this.rear === this.front;
    }
    size(){
        return this.rear  - this.front;
    }
    display(){
        if(this.isEmpty())return 'the Queue is empty';
        let out = this.item.slice(this.front, this.rear).join(' -> ');
        console.log(` FRONT -> ${out} -> REAR`)
    }
}
function reverse(queue){
    if(q.isEmpty())return;
    let front = q.deQueue();
    reverse(queue);
    q.enQueue(front)
}

let q = new Queue();
q.enQueue(4);
q.enQueue(5);
q.enQueue(1);
q.enQueue(9);
q.enQueue(7);
q.display();

console.log("After reverse : -");
reverse(q);
q.display()
