class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    peek() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        const frontPart = [...this.stack2].reverse();
        const backPart = [...this.stack1];

        console.log([...frontPart, ...backPart].join(" "));
    }
}

// ✅ Testing
let q = new QueueUsingStacks();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Dequeued:", q.dequeue()); // 10
console.log("Front:", q.peek());       // 20
console.log("Size:", q.size());        // 2

q.print(); // 20 30