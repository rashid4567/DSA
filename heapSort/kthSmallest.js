class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getparentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getparentIndex(index);
      if (this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  heapifyDown(index) {
    let largest = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if (left < this.heap.length && this.heap[left] > this.heap[largest])
      largest = left;
    if (right < this.heap.length && this.heap[right] > this.heap[largest])
      largest = right;
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
  size(){
    return this.heap.length
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  printHeap() {
    console.log(this.heap);
  }
}
function findKthSmallest(arr, k) {
  let maxheap = new MaxHeap();
  for(let num of arr){
    maxheap.insert(num);
    if(maxheap.size() > k){
        maxheap.extractMax()
    }
  }
  return maxheap.peek()
}

let arr = [7, 10, 4, 3, 20, 15];
let k = 3;
console.log(`The ${k}rd smallest element is:`, findKthSmallest(arr, k)); 
