function mergeSort(arr){
    if(arr.length <=1)return arr;
    let mid = Math.floor(arr.length /2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    return sort(mergeSort(leftArray), mergeSort(rightArray))
}

function sort(leftArray, rightArray){
    let sorted = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sorted.push(leftArray.shift())
        }else{
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArray, ...rightArray]
}

function mergeSort(arr){
    if(arr.length <= 1)return arr;
    let mid = Math.floor(arr.length/2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    return sort(mergeSort(leftArray), mergeSort(rightArray))
}

function sort(leftArray, rightArray){
    let sorted = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] >= rightArray[0]){
            sorted.push(leftArray.shift())
        }else{
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArray, ...rightArray]
}
 
let arr = [1, -5, 4, 7, 6, -9, 2, 5];
console.log(mergeSort(arr));