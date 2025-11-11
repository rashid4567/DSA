class Stack{
    constructor(){
        this.stack = [];
    }
    push(data){
        this._insertAtOrder(data)
    }
    _insertAtOrder(val){
        if(this.isEmpty() || val > this.peek()){
            this.stack.push(val)
            return
        }

        let temp =this.pop();
        this._insertAtOrder(val);
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
        return this.stack[this.stack.length -1]
    }
    isEmpty(){
        return this.stack.length  === 0
    }
    print(){
        if(this.isEmpty()){
            console.log("it is empty");
            return
        }
        console.log(this.stack.join(" -> "))
    }
}


let s = new Stack();
[3,4,2,6,7,8,4,2,5,6].forEach(x => s.push(x))
s.print()