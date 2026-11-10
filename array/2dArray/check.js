 
function find(arr){
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j= 0; j<arr[0].length; j++){
            count++
        }
        console.log(count);
    }
}
console.log(find(arr))