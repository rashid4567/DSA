class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return `The stack is empty`;
        }
        return this.Stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return `The stack is empty`;
        }
        return this.Stack[this.Stack.length-1]
    }
    isEmpty(){
        return this.Stack.length === 0;
    }
    size(){
        return this.Stack.length;
    }
    print(){
        console.log(this.Stack.join(' ->'))
    }
}
function deleteIndex(stack, targetIndex,current=0){
    if(stack.isEmpty())return;

    let top =  stack.pop();
    deleteIndex(stack,targetIndex, current+1);
    if(current !== targetIndex){
        stack.push(top)
    }
}

let stack = new Stack();
[1,2,3,4,5,6].forEach(x => stack.push(x));

deleteIndex(stack,3);
stack.print()