function quickSort(arr,k){
    if(arr.length <=1)return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
   if (left.length === k - 1) {
    return pivot;
  } else if (left.length >= k) {
    return quickSort(left, k);
  } else {
    return quickSort(right, k - left.length - 1);
  }
}

let arr = [2,4,2,4,5,7,-8,1,-6];
let k = 5;
console.log(quickSort(arr,k))