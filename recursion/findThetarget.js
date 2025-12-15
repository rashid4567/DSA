function findTarget(arr, target, left =0 , right = arr.length-1){
    if(left > right)return 0;
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] > target){
        return findTarget(arr, target, left, mid-1)
    }else{
        return findTarget(arr, target, mid+1, right)
    }
}

let arr = ["Hello", "Every","One","Are","you","ok"];
let target = "One";
arr.sort();
console.log(arr)
console.log(findTarget(arr, target))