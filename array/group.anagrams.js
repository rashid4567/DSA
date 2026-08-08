
const words =  ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]


function groupAnagrams(words){
    let map = new Map();
    
    for(let word of words){
        const key = word.split("").sort().join("");
        
        if(!map.has(key)){
            map.set(key,[])
        }
        
        map.get(key).push(word)
    }
    
    return [...map.values()]
}



console.log(groupAnagrams(words))