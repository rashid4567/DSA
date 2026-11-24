let arr = [1, 2, 4, 6, 8, 10];

// Output: [3, 5, 7, 9]

function find(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let res = [];

    for(let i=min + 1; i<max; i++){
        if(!arr.includes(i)){
            res.push(i)
        }
    }
    return res;
}

console.log(find(arr))