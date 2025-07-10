class maxHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i -1)/2)
    }
    getLeftInedx(i){
        return 2 * i + 1
    }
    getRightIndex(i){
        return 2 * i +2;
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length -1;
        while(index > 0){
            let parent = this.getParentIndex(index);
            if(this.heap[index] > this.heap[parent]){
                this.swap(index, parent);
                index = parent
            }else{
                break;
            }
        }
    }
    size(){
        return this.heap.length;
    }
    heapifyDown(index){
        let largest = index;
        let left = this.getLeftInedx(index);
        let right = this.getRightIndex(index);
        if(left < this.size() && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(right < this.size()&& this.heap[right] > this.heap[largest]){
            largest = right
        }
    }
    remove(value){
        let index = this.heap.indexOf(value);
        if(index === -1)return false;
        
        this.swap(index, this.heap.length-1)
        this.heap.pop()
        this.heapifyUp(index);
        this.heapifyDown(index);
        
        return true;
    }
    print(){
        console.log(this.heap)
    }
    
}
let max =new maxHeap();
[4,5,6,3,2,3,8,9,8].forEach(x => max.insert(x));
max.print()
max.remove(5)
console.log("\nAfter removing 5");
max.print()