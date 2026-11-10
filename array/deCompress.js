function decompress(str){
    let res = "";

    for(let i=0; i< str.length; i+=2){
        let char = str[i];
        let count = Number(str[i + 1]);

        for(let j=0; j<count; j++){
            res += char;
        }
    }

    return res
}

let str = "a3b1c3";
console.log(decompress(str))