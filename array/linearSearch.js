function linearSearch(arr, target){
    let i=0;
    while(i < arr.length){
        if(arr[i] === target){
            return i;
        }
        i++;
    }
    return -1;
}

console.log(linearSearch([5,4,3,2,1,6,7,8,9],6))