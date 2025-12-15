class circualrQueue{
    constructor(size){
        this.item = new Array(size);
        this.size = size;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }
    isFull(){
        return this.currentLength === this.size;
    }
   isEmpty(){
     return this.currentLength === 0
   }
   enQueue(element){
    if(this.isFull()){
        console.log("The queue is full", element)
        return ;
    }
    this.rear = (this.rear+1)% this.size;
    this.item[this.rear] = element;
    this.currentLength +=1;
    if(this.front === -1){
        this.front = this.rear;
    }
   }
   deQueue(){
    if(this.isEmpty()){
        console.log("The queue is empty");
        return null;
    }
    let item = this.item[this.front];
    this.item[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.currentLength -= 1;
    if(this.isEmpty()){
        this.front = -1;
        this.rear = -1;
    }
    return item;
   }
   peek(){
    if(this.isEmpty()){
        console.log("The queue is empty");
        return 
    }
    return this.item[this.front]
   }
   display(){
    if(this.isEmpty()){
        console.log('THe queue is empty');
        return;
    }
    let i = this.front;
    let str = " ";
    while(true){
        str +=this.item[i] + " ";
        if(i === this.rear) break;
        i = (i +1) % this.size;
    }
    console.log("Queue : ", str.trim())
   }

}

let Queue = new circualrQueue(5);
Queue.enQueue(5)
Queue.enQueue(2)
Queue.enQueue(6)
Queue.enQueue(1)
Queue.enQueue(8);
Queue.display();
console.log(Queue.peek());
console.log(Queue.isEmpty());
console.log(Queue.deQueue())
Queue.display();
console.log(Queue.peek())