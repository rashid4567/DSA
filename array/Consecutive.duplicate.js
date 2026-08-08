const str = "aaabbccccdd";
//a3b2c4d2

function compress(str){
    let result = "";
    let count = 1;

    for(let i=0; i<str.length; i++){
        if(str[i] === str[i + 1]){
            count++;
        }else{
            result += str[i] + count;
            count = 1;
        }
    }
    return result
}

console.log(compress(str))