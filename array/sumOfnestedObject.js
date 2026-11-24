let obj = {
    a: 10,
    b: {
        c: 20,
        d: 30
    },
    e: {
        f: 40
    }
};

// Output: 100


function find(obj){
    let sum = 0;

    for(let n in obj){
        if(typeof obj[n] === "number"){
            sum += obj[n]
        }else if(typeof obj[n] === "object" || obj[n] !== null){
            sum += find(obj[n]);
        }
    }

    return sum;
}

console.log(find(obj))