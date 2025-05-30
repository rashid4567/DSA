function removeallduplicate(str, index, seen= new Set()){
    if(index >= str.length)return '';
    let char = str[index];
    if(seen.has(char)){
        return removeallduplicate(str, index + 1 , seen)
    }else{
        seen.add(char)
        return char + removeallduplicate(str, index +1, seen)
    }
}
console.log(removeallduplicate("Hello world"))