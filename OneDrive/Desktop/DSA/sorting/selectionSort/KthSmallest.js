function selectionSort(arr, k){
    let n = arr.length;
    
    for(let i=0; i<n-1; i++){
        let minIndex = i;

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
       if(minIndex !== i){
         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
       }
    }
    return arr[k-1]
}

let arr = [5,4,3,6,4,2,6,8];
console.log(selectionSort(arr))