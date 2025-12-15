function binarySearchReplace(arr, target, left = 0, right = arr.length-1){
    if(left > right)return 0;
    let mid = Math.floor((left+right)/2)
    if(arr[mid] === target){
        arr[mid] = 0;
        return arr;
    }else if(arr[mid] < target){
        return binarySearchReplace(arr, target, mid+1, right)
    }else{
        return binarySearchReplace(arr,target, left,mid-1)
    }
}
console.log(binarySearchReplace([1,12,23,34,45,45,66,77,87,78,89,90,111],45))