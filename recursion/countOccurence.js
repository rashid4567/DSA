function counter(arr,target, index = 0){
    if(arr.length === index)return 0;
    let count = counter(arr,target, index + 1);
    if(arr[index] === target){
        return count+1;
    }

    return count;
}

let arr = [2, 4, 2, 5, 2, 7]
let target = 2

console.log(counter(arr,target))