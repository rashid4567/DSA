function convertMinHeapToMaxHeap(minHeap){
    let maxHeap = [...minHeap];

    const heapifyDown = (arr, i, n) =>{
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if(left < n && arr[left] > arr[largest])largest = left;
        if(right < n && arr[right] > arr[largest])largest = right;
        if(largest !== i){
            [arr[i],arr[largest]] = [arr[largest], arr[i]];
            heapifyDown(arr,largest,n)
        }
    }

    const n = maxHeap.length;
    for(let i = Math.floor((n -1)/2); i>=0; i--){
        heapifyDown(maxHeap, i, n)
    }
    return maxHeap
}
const minHeap = [1, 3, 5, 7, 9, 6];
const maxHeap = convertMinHeapToMaxHeap(minHeap);
console.log("Max Heap:", maxHeap);