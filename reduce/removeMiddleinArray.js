function removeMiddle(arr){
    let mid = Math.floor(arr.length/2);
    arr.splice(mid,1);
    return arr
}

console.log(removeMiddle(["javascript","python","html","css",'java']))


//if the array length is even remove the middle element of the array

function removeEvenMiddle(arr){
    let even = arr.length % 2 === 0 ? true : false;
    let mid = Math.floor(arr.length/2);
    if(even){
        arr.splice(mid,1)
    }

    return arr
}

console.log(removeEvenMiddle(["javascript","python","html","css",'java',"c"]))