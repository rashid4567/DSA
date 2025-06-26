function isAnagram(s,t){
    if(s.length !== t.length)return false;
    let map = {};
    for(let char of s){
        map[char] = (map[char] || 0) + 1;
    }
    for(let char of t){
        if(!map[char])return false;
        map[char]--;
    }
    return true;
}
let s = "hello";
let t = "elolh";
console.log(isAnagram(s,t))