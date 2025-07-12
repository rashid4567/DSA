class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  getRightIndex(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[i], this.heap[j]];
  }
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = this.getParentIndex(index);
      if (this.heap[index].priority < this.heap[parent].priority) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return top;
  }
  heapifyDown(index) {
    let smallest = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if (
      left < this.heap.length &&
      this.heap[left].priority < this.heap[smallest].priority
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right].priority < this.heap[smallest].priority
    ) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  print() {
    console.log(this.heap);
  }
}

const pq = new PriorityQueue();

pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);

  pq.print();

  console.log(pq.dequeue());
  console.log(pq.peek());
