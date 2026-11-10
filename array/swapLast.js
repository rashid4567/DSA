function swap(arr){
    let last = arr.length-1;

    [arr[0],arr[last]] = [arr[last],arr[0]];

    return arr;
}

console.log(swap([1,2,3,4,5,6]))

//In here it will swap the first element and also the last element of the array like it will swap the 1 and 6 then the output become
// 6 2 3 4 5 1