let arr = [10, 4, 25, 7, 18];

function smallest(arr, index = 0){
    if(arr.length-1 === index)return arr[index];
    let min = smallest(arr, index + 1);
    return Math.min(arr[index], min)
}

console.log(smallest(arr))
