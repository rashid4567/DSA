let str = "hello world javascript";

// Output: "olleh dlrow tpircsavaj"

function reverse(str){
    return str.split(" ").map((word)=> word.split('').reverse().join("")).join(" ")
}

console.log(reverse(str))

//Reverse the string without changing the order without the map
function reverse(str){
    str = str.split(" ");
    let res = [];

    for(let word of str){
        res.push(word.split("").reverse().join(""))
    }

    return res.join(" ")
}

console.log(reverse(str))