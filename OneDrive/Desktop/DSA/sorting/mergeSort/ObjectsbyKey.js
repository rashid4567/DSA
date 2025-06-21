function mergeSort(arr){
    if(arr.length <=1)return arr;
    let mid = Math.floor(arr.length/2);
    let rightArray = arr.slice(mid);
    let leftArray = arr.slice(0, mid);
    return sort(mergeSort(leftArray), mergeSort(rightArray))
}
function sort(leftArray, rightArray){
    let sorted = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0].marks <= rightArray[0].marks){
            sorted.push(leftArray.shift())
        }else{
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArray, ...rightArray]
}

const students = [
  { name: "Ali", marks: 90 },
  { name: "Ben", marks: 75 },
  { name: "Cara", marks: 88 }
];

console.log(mergeSort(students))