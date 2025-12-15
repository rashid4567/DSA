function leastOccured(str){
    let map = {};
    for(let char of str){
        map[char] = (map[char] || 0) + 1;
    }
    
    let minChar = null;
    let min = Infinity;
    for(let key in map){
        if(map[key] < min){
            min = min[key];
            minChar = key;
        }
    }
    return minChar;
}
console.log(leastOccured("hello world"))