function removeDuplcate(str){
    let seen = {};
    let resut = "";
    for(let char of str){
        if(!seen[char]){
            seen[char] = true;
            resut += char;
        }
    }
    return resut;
}
console.log(removeDuplcate("hello world"))