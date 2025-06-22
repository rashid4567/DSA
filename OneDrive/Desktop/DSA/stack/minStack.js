class minStack{
    constructor(){
        this.Stack = [];
        this.minStack = [];
    }
    push(element){
        this.Stack.push(element);
        if(this.isMinEmpty() || element <= this.getMin()){
            this.minStack.push(element)
        }
    }
    pop(){
        if(this.isEmpty()){
            return 'The Stack is empty';
        }
        let removed = this.Stack.pop();
        if(removed === this.getMin()){
            this.minStack.pop();
        }
        return removed;        
    }
    peek(){
        return this.Stack[this.Stack.length-1]
    }
    getMin(){
        if(this.isMinEmpty()){
            return 'The stack is empty';
        }
        return this.minStack[this.minStack.length-1]
    }
    isEmpty(){
        return this.Stack.length === 0
    }
    isMinEmpty(){
        return this.minStack.length === 0
    }
    print(){
        console.log("stack :", this.Stack.join(" -> "));
        console.log("min : ", this.minStack.join())
    }
}

const min = new minStack();
min.push(4);
min.push(5);
min.push(2);
min.push(3);
min.push(7);

console.log(min.getMin());
min.pop();
console.log(min.getMin())
min.print()