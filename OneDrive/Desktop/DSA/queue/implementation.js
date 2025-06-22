class Queue{
    constructor(){
        this.item = [];
        this.front =0;
        this.rear = 0;
    }
    enqueue(element){
        this.item[this.rear] = element;
        this.rear++;
    }
    dequeue(){
        if(this.isEmpty())return 'The queue is empty';
        let removed = this.item[this.front];
        this.front++;
        return removed;
    }
    peek(){
        if(this.isEmpty())return 'The queue is empty';
        return this.item[this.front];
    }
    isEmpty(){
        return this.rear === this.front;
    }
    size(){
        return this.rear - this.front;
    }
    display(){
        if(this.isEmpty())return "The queue is empty";
        let out = this.item.slice(this.frond, this.rear).join(' -> ');
        console.log(`FRENT -> ${out} -> REAR`)
    }
}


let q = new Queue();
q.enqueue(5);
q.enqueue(6);
q.enqueue(1);
q.enqueue(8);
q.enqueue(3);
q.display();
console.log("After delete :-",q.dequeue());
console.log('peek :', q.peek());

q.display()