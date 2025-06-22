 class Stack{
    constructor(){
        this.Stack = [];
    }
    push(element){
        this.Stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'The stack is empty';
        }
        return this.Stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'The stack is empty';
        }
        return this.Stack[this.Stack.length-1]
    }
    size(){
        return this.Stack.length;
    }
    isEmpty(){
        return this.Stack.length === 0;
    }
    print(){
        console.log(this.Stack.join(' ->'))
    }
 }

 function insertAtSortOrder(stack,value){
    if(stack.isEmpty() || stack.peek() <= value){
        stack.push(value);
        return
    }

    let temp = stack.pop();
    insertAtSortOrder(stack,value);
    stack.push(temp)
 }
 function sorted(stack){
    if(!stack.isEmpty()){
        let temp = stack.pop();
        sorted(stack);
        insertAtSortOrder(stack, temp)
    }
 }
 let stack = new Stack();
[6,3,4,1,5,2].forEach(x => stack.push(x));
sorted(stack)
stack.print()