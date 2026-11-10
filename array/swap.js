function swap(arr){
    for(let i=0; i<arr.length-1; i+=2){
        [arr[i],arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return arr;
}

let arr = [1,2,3,4,5,6,7,8]

console.log(swap(arr))