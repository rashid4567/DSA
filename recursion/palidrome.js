function ispalidrome(str, start = 0, end = str.length-1){
    if(start >= end) return true;
    if(str[start] !== str[end])return false;
    return ispalidrome(str, start+1, end-1)
}
console.log(ispalidrome("madam"))

let arr1 = [1, 2, 3, 2, 1]
let arr2 = [1, 2, 3, 4];

function check(arr, index = 0){
    if(arr.length >= index)return true;
    
    if(arr[index] !== arr[arr.length-1-index])return false;
    return check(arr, index + 1)
}

console.log(check(arr1))