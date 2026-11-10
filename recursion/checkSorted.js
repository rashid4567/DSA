function check(arr, index = 0){
    if(arr.length === index)return true;
    if(arr[index] > arr[index + 1])return false;
    return check(arr, index + 1)
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 3, 2, 4]

console.log(check(arr1))