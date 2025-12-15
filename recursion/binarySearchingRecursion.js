function binarySearching(arr, target, low =0, high = arr.length-1){
    if(low > high)return -1;
    let mid = Math.floor((low + high)/2);
    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] > target){
        return binarySearching(arr, target, low, mid-1)
    }else{
        return binarySearching(arr, target, mid + 1, high)
    }
}
let arr = [1,2,433,2,13,54,56,7,45,23,5,6,76,87,9,9,9,8,7,65]
let target = 45;
arr = arr.sort((a,b)=> a-b)
console.log(`The array after sort ${arr}`)
let f = binarySearching(arr, target)
console.log(f)