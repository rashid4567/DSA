function largest(arr, index = 0){
    if(index === arr.length)return 0;
    let max = largest(arr, index + 1);
    return Math.max(arr[index], max);
}

let arr = [10, 4, 25, 7, 18];
console.log(largest(arr))