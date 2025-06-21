function mergeSort(arr, k){
    if(arr.length <=1)return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    return sort(mergeSort(leftArr), mergeSort(rightArray))
}

function sort(leftArr, rightArray){
    let sorted = [];
    while(leftArr.length && rightArray.length){
        if(leftArr[0] <= rightArray[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArr, ...rightArray]
}
const arr = [8, 4, 2, 1];
let k =2
let sorted = mergeSort(arr,k)
console.log(sorted[k-1])