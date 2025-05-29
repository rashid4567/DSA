function removeChar(str, charR){
    if(str.length === 0)return "";
    let first = str[0];
    let rest = removeChar(str.slice(1), charR);
    return first === charR ? rest :first + rest
}
console.log(removeChar("banana", "a"))