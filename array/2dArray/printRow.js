let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function print(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].join(" "))
    }
}
console.log(print(arr))