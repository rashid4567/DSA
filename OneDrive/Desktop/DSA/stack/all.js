class Stack{
    constructor(){
        this.stack  = []
    }
    push(data){
        this._insertedOrder(data)
    }
    _insertedOrder(val){
        if(this.isEmpty() || val > this.peek()){
            this.stack.push(val);
            return
        }
        let temp = this.pop();
        this._insertedOrder(val);
        this.stack.push(temp)
    }
   pop(){
        if(this.isEmpty()){
        console.log("it is empty");
        return
    }
    return this.stack.pop()
   }
   peek(){
       if(this.isEmpty()){
           console.log("it is empty");
           return
       }
       return this.stack[this.stack.length-1]
   }
   isEmpty(){
       return this.stack.length === 0
   }
   print(){
       console.log(this.stack.join(" -> "))
   }
}
function deleteMiddle(stack , current = 0, size = stack.stack.length){
    if(stack.isEmpty())return;
    let top = stack.pop();
    if(current !== Math.floor((size)/2)){
        deleteMiddle(stack, current + 1, size)
        stack.push(top)
    }else{
        deleteMiddle(stack, current + 1, size)
    }
}
function reverseStack(stack){
    if(stack.isEmpty())return;
    let top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top)
}
function insertAtBottom(stack, val){
    if(stack.isEmpty()){
        stack.push(val);
        return
    }
    let temp = stack.pop();
    insertAtBottom(stack, val);
    stack.push(temp)
}

function search(stack, val){
   if(stack.isEmpty())return false;
   let top = stack.pop();
   let found = (top === val) || search(stack, val);
   stack.push(top);
   return found
}
function deleteIndex(stack, index, current = 0){
    if(stack.isEmpty())return false;
    let top = stack.pop();
    deleteIndex(stack, index, current + 1);
    if(current !== index)stack.push(top)
}
Stack.prototype.sortDescending = function () {
    let tempArr = [];
    while(!this.isEmpty())tempArr.push(this.pop());
    tempArr.sort((a,b)=> b - a);
    tempArr.forEach(x => this.push(x))
}
Stack.prototype.sortAscending = function (){
    let tempArr = [];
    while(!this.isEmpty())tempArr.push(this.pop());
    tempArr.sort((a,b)=> a - b);
    tempArr.forEach(x=> this.push(x))
}
let st = new Stack();
[1, 2, 3, 4, 5].forEach(x => st.push(x));
reverseStack(st);
console.log(search(st, 4)); 
st.sortAscending()
st.print(); // reversed order



