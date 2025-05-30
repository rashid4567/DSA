function removeChar(str, target){
    if(str.length === 0)return "";
    let first = str[0];
    let rest = removeChar(str.slice(1), target);
    return first === target ? rest : first + rest
}
console.log(removeChar("Hello world", "l"))