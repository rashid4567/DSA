function unique(str){
    let map = {};
    for(let char of str){
        map[char] = (map[char] || 0) + 1;
    }
    for(let char in map){
        if(map[char] === 1)return char
    }
    return null
}
console.log(unique("swiss"))