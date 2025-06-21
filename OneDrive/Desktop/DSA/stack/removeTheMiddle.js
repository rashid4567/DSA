class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "The stack is empty";
        }
        return this.Stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty";
        }
        return this.Stack[this.Stack.length-1];
    }
    isEmpty(){
        return this.Stack.length === 0
    }
    size(){
        return this.Stack.length;
    }
    print(){
        console.log(this.Stack.join(" ->"));
    }
}

function removeMiddle(stack , current , mid){  
    if(stack.isEmpty())return;
    let top = stack.pop();
    if(current !== mid){
        removeMiddle(stack, current+1, mid);
        stack.push(top)
    }
}

const stack = new Stack();
[1,2,3,4,5].forEach(n=> stack.push(n));
const mid = Math.floor(stack.size()/2)
removeMiddle(stack,0, mid);
stack.print()

