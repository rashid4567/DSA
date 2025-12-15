function maxOccured(str){
    let map = {};
    for(let char of str){
        map[char] = (map[char] || 0) + 1;
    }
    let max = -Infinity;
    let maxChar = null
    for(let key in map){
        if(map[key] > max){
            max = map[key];
            maxChar = key
        }
    }
    return maxChar;
}
console.log(maxOccured("hello world"))