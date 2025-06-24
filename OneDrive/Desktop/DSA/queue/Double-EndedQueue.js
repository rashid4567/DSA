class Deque{
    constructor(){
        this.item = [];
        this.rear = 0;
        this.front = 0;
    }
    rearEnqueue(element){
        this.item[this.rear] = element;
        this.rear++;
    }
    frontEnqueue(element){
     
        this.front--;
        this.item[this.front] = element;
    }
    frontDequeue(){
        if(this.isEmpty()){
            console.log("The queue is empty");
            return null;
        }
        let removed = this.item[this.front]
        this.item[this.front] = null;
        this.front++;
        return removed;
    }
    rearDequeue(){
        if(this.isEmpty()){
            console.log("The queue is empty");
            return null;
        }
        this.rear--;
        let removed = this.item[this.rear];
        this.item[this.rear] = null;
        return removed;
    }
    peekFront(){
        if(this.isEmpty()){
            console.log("The queue is empty");
            return null;
        }
        return this.item[this.front];
    }
    peekRear(){
        if(this.isEmpty()){
            console.log("The queue is empty");
            return null;
        }
        return this.item[this.rear-1];
    }
    isEmpty(){
        return this.front === this.rear;
    }
    size(){
        return this.rear - this.front;
    }
    display(){
        if(this.isEmpty()){
            console.log("The list is empty");
            return null;
        }
        let out = "";
        for(let i= this.front; i<this.rear; i++){
            if(this.item[i] !== null){
                out +=  ` ${this.item[i]} ->`
            }
        }
        console.log(`FRONT -> ${out} -> REAR`)
    }
}

let DQ = new Deque();
DQ.rearEnqueue(5);
DQ.rearEnqueue(10);
DQ.frontEnqueue(15);
DQ.frontEnqueue(20);
DQ.rearEnqueue(25);
DQ.display()

console.log("dequeue from front :-",DQ.frontDequeue())
console.log("dequeue from rare :-",DQ.rearDequeue())
console.log("peek from Front :", DQ.peekFront());
console.log("peek from Rear :", DQ.peekRear());
console.log("size :",DQ.size() );
DQ.display()