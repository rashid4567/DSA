function findTheTarget(arr, target, left=0, rigth=arr.length-1){
    if(left>rigth)return arr;
    let mid = Math.floor((left + rigth)/2);
    if(arr[mid] === target)return mid;
    if(arr[mid] > target){
        return findTheTarget(arr, target, mid +1, rigth)
    }else{
        return findTheTarget(arr, target, left, mid-1)
    }
}
let f = ["Hello", "How","Are", "you"]
console.log(findTheTarget(f, "How"))