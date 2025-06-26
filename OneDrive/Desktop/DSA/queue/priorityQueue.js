class priorityQueue {
  constructor() {
    this.item = [];
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element, priority) {
    const newElement = { element, priority };
    let inserted = false;
    for (let i = this.front; i < this.rear; i++) {
      if (this.item[i].element < priority) {
        this.item.splice(i, 0, newElement);
        this.rear++;
        inserted = true;
        break;
      }
    }
    if(!inserted){
        this.item[this.rear] = newElement
        this.rear++;
    }
  }
  dequeue(){
    if(this.isEmpty()){
        console.log("The queue is empty");
        return null;
    }
    let removed = this.item[this.front];
    this.item[this.front] = null;
    this.front++;
    return removed;
  }
  isEmpty(){
    return this.front === this.rear;
  }
  size(){
    return this.rear - this.front;
  }
  peek(){
    if(this.isEmpty()){
        console.log("The queue is empty");
        return null;
    }
    return this.item[this.front]
  }
  display(){
    if(this.isEmpty()){
        console.log("The queue is empty");
        return null;
    }
    let out = "";
    for(let i=this.front; i<this.rear; i++){
        out += `${this.item[i].element}(p:${this.item[i].priority}) `
    }
    console.log(`FRONT ${out} REAR`)
  }
}

let PQ = new priorityQueue();
PQ.enqueue(4,6)
PQ.enqueue(5,4)
PQ.enqueue(6,3) 
PQ.enqueue(7,2)
PQ.enqueue(8,1)
PQ.enqueue(9,6)
PQ.enqueue(3,8)
PQ.display();
console.log(PQ.peek())
console.log(PQ.dequeue())
console.log(PQ.size())
PQ.display()