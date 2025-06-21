function mergeSort(arr){
    if(arr.length <= 1)return arr;
    let mid = Math.floor(arr.length/2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    return sort(mergeSort(leftArray), mergeSort(rightArray));
}
function sort(leftArray, rightArray){
    let sorted = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <=  rightArray[0]){
            sorted.push(leftArray.shift())
        }else{
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArray, ...rightArray]
}
function removeKth(arr, k){
    let sorted = mergeSort([...arr]);
    let valueToremove = sorted[k-1];
    let found = false;

    let res = arr.filter((val)=>{
        if(!found && val === valueToremove){
            found = true;
            return false;
        }
        return true;
    })
    return res;
}

const arr = [8, 4, 2, 1];
const k = 3;
console.log(removeKth(arr, k)); 