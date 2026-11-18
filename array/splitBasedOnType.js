let arr = [1, "hello", true, 2, "world", false]


//expected output
//   {
//   number: [1, 2],
//   string: ["hello", "world"],
//   boolean: [true, false]
// }

function find(arr){
    let res = {};

    for(let item of arr){
        let type = typeof item;
        
        if(!res[type]){
            res[type] = []
        }

        res[type].push(item)
    }

    return res;
}

console.log(find(arr))