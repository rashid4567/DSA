let arr = [1, "hello", true, 2, "world", false]


//expected output
//   {
//   number: [1, 2],
//   string: ["hello", "world"],
//   boolean: [true, false]
// }

function find(arr){
    let number = [];
    let string = [];
    let boolean = [];

    for(let item of arr){
        if(typeof item === "number")number.push(item);
        if(typeof item === "string")string.push(item);
        if(typeof item === "boolean")boolean.push(item);
    }

    return {
        Number : number,
        String : string,
        Boolean : boolean,
    }
}

console.log(find(arr))