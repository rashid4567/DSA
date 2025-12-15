function mergeSort(str){
    if(typeof str === "string"){
        str = str.split(' ');
    }
    if(str.length <=1)return str;
    let mid = Math.floor(str.length/2);
    let leftString = str.slice(0, mid);
    let rightString = str.slice(mid);
    return sort(mergeSort(leftString), mergeSort(rightString))
}


function sort(leftString,rightString){
    let sorted = [];
    while(leftString.length && rightString.length){
        if(leftString[0] <= rightString[0]){
            sorted.push(leftString.shift())
        }else{
            sorted.push(rightString.shift())
        }
    }
    return [...sorted, ...leftString, ...rightString]
}

let str = "hello every one where were are you till now"
console.log(mergeSort(str).join(' '))