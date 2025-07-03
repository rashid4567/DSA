class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
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
            let parentIndex = this.getParentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
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

function findKthSmallest(arr, k){
    let minheap = new MinHeap();
    for(let num of arr){
        minheap.insert(num)
        if(minheap.size() > k){
            minheap.extractMin()
        }
    }
    return minheap.peek()
}
let arr = [7, 10, 4, 3, 20, 15];
let k = 3;
console.log(`The ${k}rd smallest element is:`, findKthSmallest(arr, k)); 