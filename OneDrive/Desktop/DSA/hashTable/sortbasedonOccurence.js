function occurenceSort(str){
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    return str
            .split("")
            .sort((a,b)=> freq[a] - freq[b])
            .join('')
}

console.log(occurenceSort("hello world"))