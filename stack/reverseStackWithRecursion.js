class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'The stack is empty'
        }
        return this.Stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return 'The stack is empty';
        }
        return this.Stack[this.Stack.length-1];
    }
    isEmpty(){
        return this.Stack.length === 0
    }
    size(){
        return this.Stack.size;
    }
    print(){
        console.log(this.Stack.join(' ->'))
    }
}
function insertAtBottom(stack, item){
    if(stack.isEmpty()){
        stack.push(item);
        return;
    }
    let top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top)
}

function reverseStack(stack){
    if(stack.isEmpty())return;

    let top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top)
    
}

let stack = new Stack();
[1,2,3,4,5,6].forEach(x => stack.push(x));
reverseStack(stack);
stack.print()