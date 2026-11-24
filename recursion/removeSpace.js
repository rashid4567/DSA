function remove(str, index = 0, res = ""){
    if(str.length === index)return res;

    if(str[index] !== " "){
        res += str[index];
    }

    return remove(str, index + 1, res);
}

console.log(remove("hello world"))