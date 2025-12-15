let arr = [4,3,2,5,6,5,7,7,6,4,5,56]
let largest = arr.reduce((a,b)=> b > a ? b : a)
console.log(largest)